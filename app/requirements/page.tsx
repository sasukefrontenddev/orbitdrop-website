import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "System Requirements — OrbitDrop", description: "Hardware and operating-system requirements for OrbitDrop." };

export default function RequirementsPage() {
  return <InfoPage eyebrow="Compatibility" title="Built for modern desktops." introduction="OrbitDrop is a native desktop tool for supported versions of macOS and Windows. It is not a browser converter." sections={[
    { title: "macOS", content: <><ul><li>macOS 13 Ventura or later</li><li>Apple Silicon or Intel processor</li><li>Approximately 5 MB of free disk space after extraction</li><li>Permission to read and write in folders you choose</li></ul><p>The download is a universal application ZIP containing both processor architectures.</p></> },
    { title: "Windows", content: <><ul><li>64-bit Windows 10 or Windows 11</li><li>x64 processor</li><li>Approximately 100 MB of free disk space</li><li>Permission to read and write in folders you choose</li></ul><p>The executable is self-contained, so a separate .NET runtime download is not required.</p></> },
    { title: "File support", content: <><p>Image tools support formats recognized by the operating system, including PNG, JPG/JPEG, TIFF, BMP, GIF, and common modern image formats where the platform provides a decoder. PDF creation also accepts DOCX, RTF, TXT, and HTML documents.</p><p>Exact image support can vary by operating-system version and installed codecs.</p></> },
    { title: "Not supported", content: <><p>The current OrbitDrop release does not include Linux, mobile, or web conversion. The download website can be viewed on those devices, but file operations require the macOS or Windows desktop app.</p></> },
  ]} />;
}
