import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "Privacy — OrbitDrop", description: "How OrbitDrop protects your files and minimizes data collection." };

export default function PrivacyPage() {
  return <InfoPage eyebrow="Privacy notice · Updated 19 October 2026" title="Your files stay yours." introduction="OrbitDrop is designed to work without collecting personal information. This notice explains the desktop app, this download website, and the small amount of technical activity required to deliver a file to you." sections={[
    { title: "The short version", content: <><div className="notice-box"><p>OrbitDrop does not upload your files, require an account, use advertising cookies, run analytics, sell data, or build a profile about you.</p></div><p>Conversions, compression, archives, and image edits happen on your own computer. The website exists only to explain the product and deliver the installers.</p></> },
    { title: "Desktop app", content: <><p>The OrbitDrop desktop app reads only the files you deliberately select. It processes those files locally and saves the result beside the source. It does not send file contents, filenames, usage events, crash reports, or device identifiers to OrbitDrop.</p><p>After installation, the core file tools work without an internet connection.</p></> },
    { title: "Download website", content: <><p>This website has no account system, contact form, database, analytics script, advertising pixel, or marketing cookie. It does not use browser storage to remember visitors.</p><p>To recommend the correct installer, a small script reads the operating-system label already exposed by your browser. That decision happens in browser memory and is not sent to OrbitDrop. On Windows, the installer pieces are joined in browser memory before the completed file is saved.</p></> },
    { title: "Hosting and downloads", content: <><p>Like any website, loading a page or installer requires your browser to request files from the hosting network. Infrastructure providers may temporarily process ordinary request information—such as an IP address and security logs—to deliver and protect the service. OrbitDrop does not add tracking or use that information to profile visitors.</p><p>If you prefer, you can download once and use the desktop app offline afterward.</p></> },
    { title: "Sharing and sale", content: <><p>OrbitDrop does not sell personal information. Because the product has no accounts and does not collect your files, there is no file content or account profile to share with advertisers or data brokers.</p></> },
    { title: "Your choices", content: <><p>You can use the desktop app offline, remove it at any time, and delete any outputs it creates using the normal tools in macOS or Windows. There is no OrbitDrop account to close and no marketing list to leave.</p></> },
    { title: "Changes to this notice", content: <><p>If OrbitDrop adds a feature that changes how data is handled, this notice will be updated before that feature is released. The date at the top shows the latest revision.</p></> },
  ]} />;
}
