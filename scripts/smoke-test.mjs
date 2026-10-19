const siteUrl = (process.env.SITE_URL ?? "https://orbitdropapp.vercel.app").replace(/\/$/, "");
const pages = ["/", "/help", "/privacy", "/security", "/terms", "/checksums", "/releases", "/requirements", "/verify"];

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
