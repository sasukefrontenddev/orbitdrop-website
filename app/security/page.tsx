import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "Security — OrbitDrop", description: "OrbitDrop security architecture, installer verification, and local processing model." };

export default function SecurityPage() {
  return <InfoPage eyebrow="Security" title="A smaller attack surface." introduction="OrbitDrop removes the riskiest part of online file conversion: sending a sensitive document to somebody else’s server." sections={[
    { id: "architecture", title: "Offline architecture", content: <><p>The desktop app performs its core work locally. There is no OrbitDrop conversion API, cloud file bucket, user database, or account service. The app does not need a persistent connection after installation.</p><ul><li>Files are opened from locations you select.</li><li>Outputs are written beside the source under a new name.</li><li>No telemetry or analytics SDK is included.</li><li>No original is intentionally overwritten.</li></ul></> },
    { title: "Installer integrity", content: <><p>Every published release includes SHA-256 checksums. A checksum lets you confirm that the downloaded file exactly matches the published installer.</p><p>See the <a href="/verify">verification guide</a> or open the <a href="/downloads/SHA256SUMS.txt">current checksum file</a>.</p></> },
    { title: "Signing status", content: <><div className="notice-box"><p>Version 0.3.0 is an early unsigned release. macOS Gatekeeper or Microsoft Defender SmartScreen may therefore ask you to confirm before opening it.</p></div><p>Do not continue if a file came from another website or if its checksum does not match. Platform code signing and notarization are planned for a later release.</p></> },
    { title: "Operating-system permissions", content: <><p>OrbitDrop needs access to the files you choose so it can read the source and create an output in the same folder. macOS and Windows may ask for folder access based on your privacy settings. OrbitDrop does not request unrelated contacts, camera, microphone, or location data.</p></> },
    { title: "Safe use", content: <><p>Keep a backup of important work, download only from the official OrbitDrop site, verify checksums for sensitive environments, and keep your operating system security updates enabled. Do not process an untrusted file if your operating system or antivirus tool flags it as malicious.</p></> },
  ]} />;
}
