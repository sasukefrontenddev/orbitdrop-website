import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "Release Notes — OrbitDrop", description: "What is new in OrbitDrop desktop releases." };

export default function ReleasesPage() {
  return <InfoPage eyebrow="Release notes" title="What’s new in OrbitDrop." introduction="A transparent history of product changes, platform support, and known limitations." sections={[
    { title: "Version 0.3.0", eyebrow: "19 October 2026 · Current", content: <><h3>New</h3><ul><li>Twelve evenly spaced radial actions.</li><li>PNG, JPG, TIFF, and BMP image conversion.</li><li>50% resize, 90° rotation, horizontal flip, and grayscale image editing.</li><li>ZIP compression for files and folders.</li><li>Universal macOS build for Apple Silicon and Intel.</li><li>Self-contained Windows x64 build.</li></ul><h3>Privacy</h3><ul><li>All file operations remain local.</li><li>No accounts, analytics, cookies, or telemetry.</li><li>Original files remain untouched.</li></ul><h3>Known limitations</h3><ul><li>The release is not yet code-signed or notarized.</li><li>Windows DOCX layout fidelity is best when Microsoft Word is installed.</li><li>Resize currently uses a fixed 50% preset.</li></ul></> },
    { title: "Release verification", content: <><p>Download only from this website. Before installing, compare your file with the current <a href="/checksums">SHA-256 checksums</a>. Step-by-step commands are available in the <a href="/verify">verification guide</a>.</p></> },
  ]} />;
}
