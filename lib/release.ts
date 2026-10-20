export type ReleaseAsset = {
  file: string;
  url: string;
  bytes: number;
  sha256: string;
};

export type OrbitDropRelease = {
  version: string;
  tag: string;
  publishedAt: string;
  releaseUrl: string;
  checksumsUrl: string;
  macos: ReleaseAsset;
  windows: ReleaseAsset;
};

const repository = "sasukefrontenddev/orbitdrop";

export const fallbackRelease: OrbitDropRelease = {
  version: "0.5.0",
  tag: "v0.5.0",
  publishedAt: "2026-10-20T12:54:39Z",
  releaseUrl: `https://github.com/${repository}/releases/tag/v0.5.0`,
  checksumsUrl: `https://github.com/${repository}/releases/download/v0.5.0/SHA256SUMS.txt`,
  macos: {
    file: "OrbitDrop-0.5.0-macOS-universal.zip",
    url: `https://github.com/${repository}/releases/download/v0.5.0/OrbitDrop-0.5.0-macOS-universal.zip`,
    bytes: 979960,
    sha256: "c88aef8427032715a2bc7a3923ff6c7da3a1cacf854e387f19c3499efb0ec524",
  },
  windows: {
    file: "OrbitDrop-0.5.0-Windows-x64.exe",
    url: `https://github.com/${repository}/releases/download/v0.5.0/OrbitDrop-0.5.0-Windows-x64.exe`,
    bytes: 78135258,
    sha256: "3498d82566ed2d98f2fab72d6efe1bab458b7d6cf7ccbd3fa9eb796d69fd3618",
  },
};

type GitHubAsset = { name: string; browser_download_url: string; size: number };
type GitHubRelease = { tag_name: string; html_url: string; published_at: string; assets: GitHubAsset[] };

function parseChecksums(text: string) {
  const entries = text.trim().split(/\r?\n/).flatMap<[string, string]>((line) => {
    const match = line.match(/^([a-f\d]{64})\s+\*?(.+)$/i);
    return match ? [[match[2], match[1].toLowerCase()]] : [];
  });
  return new Map(entries);
}

function isMacAsset(name: string) {
  return /macos/i.test(name) && /universal/i.test(name) && name.endsWith(".zip");
}

function isWindowsAsset(name: string) {
  return /windows/i.test(name) && /x64/i.test(name) && name.endsWith(".exe");
}

export async function getLatestRelease(): Promise<OrbitDropRelease> {
  if (process.env.ORBITDROP_RELEASE_SOURCE === "fallback") return fallbackRelease;

  try {
    const releaseResponse = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "OrbitDrop-website" },
      next: { revalidate: 300 },
    });
    if (!releaseResponse.ok) return fallbackRelease;

    const release = await releaseResponse.json() as GitHubRelease;
    const macos = release.assets.find((asset) => isMacAsset(asset.name));
    const windows = release.assets.find((asset) => isWindowsAsset(asset.name));
    const checksums = release.assets.find((asset) => asset.name === "SHA256SUMS.txt");
    if (!macos || !windows || !checksums) return fallbackRelease;

    const checksumResponse = await fetch(checksums.browser_download_url, { next: { revalidate: 300 } });
    if (!checksumResponse.ok) return fallbackRelease;
    const hashes = parseChecksums(await checksumResponse.text());
    const macHash = hashes.get(macos.name);
    const windowsHash = hashes.get(windows.name);
    if (!macHash || !windowsHash) return fallbackRelease;

    return {
      version: release.tag_name.replace(/^v/, ""),
      tag: release.tag_name,
      publishedAt: release.published_at,
      releaseUrl: release.html_url,
      checksumsUrl: checksums.browser_download_url,
      macos: { file: macos.name, url: macos.browser_download_url, bytes: macos.size, sha256: macHash },
      windows: { file: windows.name, url: windows.browser_download_url, bytes: windows.size, sha256: windowsHash },
    };
  } catch {
    return fallbackRelease;
  }
}

export function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${Math.round(bytes / (1024 * 1024))} MB`;
}

export function formatReleaseDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(value));
}
