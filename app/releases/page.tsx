import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";
import { formatReleaseDate, getLatestRelease } from "../../lib/release";

export const metadata: Metadata = { title: "Release Notes — OrbitDrop", description: "What is new in OrbitDrop desktop releases." };

export default async function ReleasesPage() {
  const release = await getLatestRelease();
  return <InfoPage eyebrow="Release notes" title="What’s new in OrbitDrop." introduction="A transparent history of product changes, platform support, and known limitations." sections={[
    { title: `Version ${release.version}`, eyebrow: `${formatReleaseDate(release.publishedAt)} · Current`, content: <><h3>Automatically verified release</h3><p>The macOS and Windows apps were built and tested by the OrbitDrop release pipeline. SHA-256 checksums and build provenance are published with every release.</p><p><a href={release.releaseUrl}>Read the complete release notes and view all assets on GitHub →</a></p><h3>Included tools</h3><ul><li>PDF, PNG, JPG, TIFF, and BMP conversion.</li><li>Adaptive image compression and maximum-compression ZIP creation.</li><li>50% resize, 90° rotation, horizontal flip, and grayscale editing.</li><li>Safe copy creation beside the original.</li><li>Privacy-first notifications when a newer official version is available.</li></ul><h3>Known limitations</h3><ul><li>Early releases are not yet code-signed or notarized.</li><li>Windows DOCX layout fidelity is best when Microsoft Word is installed.</li><li>Resize currently uses a fixed 50% preset.</li></ul></> },
    { title: "Version 0.3.0", eyebrow: "19 October 2026", content: <><p>Introduced the twelve-action native wheel, universal macOS support, the self-contained Windows build, and local conversion, compression, and image editing.</p></> },
    { title: "Release verification", content: <><p>Download only from this website. Before installing, compare your file with the current <a href="/checksums">SHA-256 checksums</a>. Step-by-step commands are available in the <a href="/verify">verification guide</a>.</p></> },
  ]} />;
}
