import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "Release Notes — OrbitDrop", description: "What is new in OrbitDrop desktop releases." };

export default function ReleasesPage() {
  return <InfoPage eyebrow="Release notes" title="What’s new in OrbitDrop." introduction="A transparent history of product changes, platform support, and known limitations." sections={[
    { title: "Version 0.4.0", eyebrow: "19 October 2026 · Current", content: <><h3>New</h3><ul><li>Dark transparent-glass command wheel on macOS and Windows.</li><li>Proper native or vector icons for all twelve actions.</li><li>Live action descriptions as you glide through the wheel.</li><li>Visible local-processing, success, and failure states.</li><li>Smoother menu motion and clearer selection feedback.</li><li>Refined menu-bar and notification-area branding.</li></ul><h3>Included tools</h3><ul><li>PDF, PNG, JPG, TIFF, and BMP conversion.</li><li>ZIP creation and file-size reduction.</li><li>50% resize, 90° rotation, horizontal flip, and grayscale editing.</li><li>Safe copy creation beside the original.</li></ul><h3>Known limitations</h3><ul><li>The release is not yet code-signed or notarized.</li><li>Windows DOCX layout fidelity is best when Microsoft Word is installed.</li><li>Resize currently uses a fixed 50% preset.</li></ul></> },
    { title: "Version 0.3.0", eyebrow: "19 October 2026", content: <><p>Introduced the twelve-action native wheel, universal macOS support, the self-contained Windows build, and local conversion, compression, and image editing.</p></> },
    { title: "Release verification", content: <><p>Download only from this website. Before installing, compare your file with the current <a href="/checksums">SHA-256 checksums</a>. Step-by-step commands are available in the <a href="/verify">verification guide</a>.</p></> },
  ]} />;
}
