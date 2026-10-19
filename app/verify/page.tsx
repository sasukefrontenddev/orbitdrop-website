import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "Verify a Download — OrbitDrop", description: "Check an OrbitDrop installer with its SHA-256 checksum." };

export default function VerifyPage() {
  return <InfoPage eyebrow="Download integrity" title="Verify before you open." introduction="A SHA-256 checksum confirms that your downloaded installer exactly matches the file published by OrbitDrop." sections={[
    { title: "Published checksums", content: <><p>Open the <a href="/checksums">visual checksum directory</a> and keep it visible while checking your download. A separate machine-readable file is available there for command-line use.</p><div className="notice-box"><p>If the values differ by even one character, delete the installer and download it again from this website.</p></div></> },
    { title: "Verify on macOS", content: <><p>Open Terminal and run:</p><p><code>shasum -a 256 ~/Downloads/OrbitDrop-0.3.0-NATIVE-macOS-universal.zip</code></p><p>Compare the result with the macOS line in the published checksum file.</p></> },
    { title: "Verify on Windows", content: <><p>Open PowerShell and run:</p><p><code>{'Get-FileHash "$HOME\\Downloads\\OrbitDrop-0.3.0-NATIVE-Windows-x64.exe" -Algorithm SHA256'}</code></p><p>Compare the result with the Windows line in the published checksum file. PowerShell may show letters in uppercase; that does not change the value.</p></> },
    { title: "What verification proves", content: <><p>A matching checksum proves the file is byte-for-byte identical to the published release. It does not replace normal operating-system security protections, so keep Gatekeeper, SmartScreen, and antivirus scanning enabled.</p></> },
  ]} />;
}
