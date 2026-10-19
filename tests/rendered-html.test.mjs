import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the privacy-first OrbitDrop download page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /OrbitDrop — Private desktop file tools/);
  assert.match(html, /100% local processing/);
  assert.match(html, /Nothing uploaded/);
  assert.match(html, /No sign-up/);
  assert.match(html, /github\.com\/sasukefrontenddev\/orbitdrop\/releases\/download\/v0\.4\.0\/OrbitDrop-0\.4\.0-NATIVE-macOS-universal\.zip/);
  assert.match(html, /Download for Windows/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/security"/);
  assert.match(html, /href="\/help"/);
  assert.match(html, /href="\/releases"/);
  assert.match(html, /href="\/requirements"/);
  assert.match(html, /href="\/verify"/);
  assert.match(html, /href="\/checksums"/);
  assert.match(html, /href="\/terms"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders every trust and support page", async () => {
  const routes = ["/privacy", "/security", "/help", "/releases", "/requirements", "/verify", "/checksums", "/terms"];
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, `${route} should render`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  }
});

test("renders the official checksum directory", async () => {
  const response = await render("/checksums");
  const html = await response.text();
  assert.match(html, /Official checksums/);
  assert.match(html, /2c9eb8ce29cb1c681f628af8d3a00776c01403a2e4cf50a4fef6132254860f2e/);
  assert.match(html, /e7f1f566372e8c8f57a88983c647b090077a9a8146d86b4f52a04cebc4d0a15f/);
  assert.match(html, /Download SHA256SUMS\.txt/);
  assert.match(html, /github\.com\/sasukefrontenddev\/orbitdrop\/releases\/download\/v0\.4\.0\/SHA256SUMS\.txt/);
});

test("contains no storage, analytics, upload, or tracking code", async () => {
  const appRoot = new URL("../app/", import.meta.url);
  const files = (await readdir(appRoot, { recursive: true })).filter((file) => /\.(tsx|ts|jsx|js)$/.test(file));
  const [sources, hosting] = await Promise.all([
    Promise.all(files.map((file) => readFile(new URL(file, appRoot), "utf8"))),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
  ]);
  const source = sources.join("\n");
  assert.doesNotMatch(source, /localStorage|sessionStorage|document\.cookie|gtag\(|posthog\.|mixpanel\.|XMLHttpRequest/i);
  assert.doesNotMatch(source, /method:\s*["']POST["']|sendBeacon|WebSocket/i);
  const hostingConfig = JSON.parse(hosting);
  assert.equal(hostingConfig.d1, null);
  assert.equal(hostingConfig.r2, null);
  assert.match(hostingConfig.project_id, /^appgprj_/);
});
