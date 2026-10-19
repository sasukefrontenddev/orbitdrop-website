import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "Help Center — OrbitDrop", description: "Install and use OrbitDrop on macOS and Windows." };

export default function HelpPage() {
  return <InfoPage eyebrow="Help center" title="Start in a minute." introduction="OrbitDrop is intentionally small: install it, select a file, open the radial wheel, and release over an action." sections={[
    { id: "getting-started", title: "Getting started", content: <><ol><li><Link href="/#download">Download</Link> the version for your operating system.</li><li>Install or open OrbitDrop using the platform steps below.</li><li>Select a supported file in Finder or File Explorer.</li><li>Right-click to open OrbitDrop, glide toward an action, and release.</li><li>Find the new output beside the original file.</li></ol></> },
    { title: "Install on macOS", content: <><ol><li>Open the downloaded ZIP file.</li><li>Move <code>OrbitDrop.app</code> to your Applications folder.</li><li>Because version 0.4.0 is not yet notarized, Control-click the app, choose Open, then confirm Open.</li></ol><p>macOS 13 Ventura or later is required. The universal build supports Apple Silicon and Intel Macs.</p></> },
    { title: "Install on Windows", content: <><ol><li>Open the downloaded <code>OrbitDrop-0.4.0-NATIVE-Windows-x64.exe</code>.</li><li>If SmartScreen appears, verify the checksum first. Then choose More info and Run anyway only if it matches.</li><li>OrbitDrop starts in the desktop notification area and is ready for selected files.</li></ol><p>64-bit Windows 10 or Windows 11 is required. The executable includes its own runtime.</p></> },
    { title: "Supported actions", content: <><p>PDF accepts images and common documents such as DOCX, RTF, TXT, and HTML. PNG, JPG, TIFF, BMP, Resize, Rotate, Flip, and Gray are available for supported images. ZIP and Copy work with files and folders.</p><p>On Windows, Microsoft Word is used for the highest-fidelity DOCX-to-PDF result when it is installed. Without Word, OrbitDrop creates a readable text-based PDF fallback.</p></> },
    { title: "Output names", content: <><p>OrbitDrop never intentionally replaces the source. If an output name already exists, it adds a number, such as <code>photo 2.jpg</code>. Image edits add a descriptive suffix such as <code>rotated</code>, <code>resized</code>, or <code>grayscale</code>.</p></> },
    { title: "Troubleshooting", content: <><h3>The wheel does not appear</h3><p>Confirm OrbitDrop is running and that the selected item is a supported file or folder. Restart the app after changing operating-system privacy permissions.</p><h3>A format action is unavailable</h3><p>The wheel enables only actions that apply to the selected item. Select a supported image for image conversion and editing tools.</p><h3>The download warning looks unfamiliar</h3><p>Stop and verify the file against the published checksum. Never install a copy obtained from an unofficial mirror.</p></> },
  ]} />;
}
