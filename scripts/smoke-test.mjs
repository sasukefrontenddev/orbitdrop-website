const siteUrl = (process.env.SITE_URL ?? "https://orbitdropapp.vercel.app").replace(/\/$/, "");
const expectedCommit = process.env.EXPECTED_COMMIT_SHA ?? "";
const pages = ["/", "/help", "/privacy", "/security", "/terms", "/checksums", "/releases", "/requirements", "/verify"];

if (expectedCommit) {
  let deployedCommit = "";
  for (let attempt = 1; attempt <= 20; attempt += 1) {
    const response = await fetch(`${siteUrl}/api/version`, { cache: "no-store", signal: AbortSignal.timeout(20_000) });
    if (response.ok) deployedCommit = String((await response.json()).commit ?? "");
    if (deployedCommit === expectedCommit) break;
    if (attempt < 20) await new Promise((resolve) => setTimeout(resolve, 15_000));
  }
  if (deployedCommit !== expectedCommit) {
    throw new Error(`Production did not reach expected commit ${expectedCommit}; found ${deployedCommit || "none"}`);
  }
}

for (const pathname of pages) {
  const response = await fetch(`${siteUrl}${pathname}`, { signal: AbortSignal.timeout(20_000) });
  if (!response.ok) throw new Error(`${pathname} returned ${response.status}`);
  const html = await response.text();
  if (!html.includes("OrbitDrop")) throw new Error(`${pathname} did not render OrbitDrop content`);
}

const home = await (await fetch(siteUrl, { signal: AbortSignal.timeout(20_000) })).text();
if (!home.includes("100% local processing") || !home.includes("Nothing uploaded")) {
  throw new Error("The production privacy promises are missing");
}

const downloadLinks = [...home.matchAll(/href="(https:\/\/github\.com\/sasukefrontenddev\/orbitdrop\/releases\/download\/[^"]+)"/g)]
  .map((match) => match[1]);
if (downloadLinks.length < 2) throw new Error("Production download links are missing");

for (const url of new Set(downloadLinks)) {
  const response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(20_000) });
  if (!response.ok) throw new Error(`Release asset returned ${response.status}: ${url}`);
}

console.log(`OrbitDrop production smoke test passed for ${siteUrl}`);
