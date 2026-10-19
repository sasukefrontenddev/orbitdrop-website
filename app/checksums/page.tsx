import type { Metadata } from "next";
import { AppleIcon, ShieldIcon, WindowsIcon } from "../Icons";
import { Footer, Header } from "../SiteChrome";
import { CopyChecksum } from "./CopyChecksum";

export const metadata: Metadata = { title: "Checksums — OrbitDrop", description: "Official SHA-256 checksums for OrbitDrop 0.3.0 downloads." };

const releases = [
  { platform: "macOS", file: "OrbitDrop-0.3.0-NATIVE-macOS-universal.zip", hash: "bc4856b4d20cc30375d0826a222288b5989e372ceb19d15fef64a6893145bc34", Icon: AppleIcon },
  { platform: "Windows", file: "OrbitDrop-0.3.0-NATIVE-Windows-x64.exe", hash: "345e4efb5f1e529908aa8e300a21e6201f4ec54dc1a941b77306eb87673b87d8", Icon: WindowsIcon },
];

export default function ChecksumsPage() {
  return <main>
    <Header />
    <section className="checksum-hero shell">
      <span className="checksum-shield"><ShieldIcon /></span>
      <span className="kicker">Release integrity · Version 0.3.0</span>
      <h1>Official checksums.</h1>
      <p>Compare the SHA-256 value of your download with the matching official value below. A perfect match confirms that the file has not changed.</p>
    </section>
    <section className="checksum-directory shell">
      <div className="checksum-head"><span>PLATFORM / FILE</span><span>SHA-256</span><span>STATUS</span></div>
      {releases.map(({ platform, file, hash, Icon }) => <article className="checksum-row" key={platform}>
        <div className="checksum-platform"><span><Icon /></span><div><strong>{platform}</strong><small>{file}</small></div></div>
        <code>{hash}</code>
        <div className="checksum-actions"><span className="verified-pill"><i /> Published</span><CopyChecksum value={hash} /></div>
      </article>)}
      <div className="checksum-foot">
        <p><span /> Plain-text access is still available for scripts and security tools.</p>
        <a href="/downloads/SHA256SUMS.txt" download>Download SHA256SUMS.txt ↓</a>
      </div>
    </section>
    <section className="checksum-help shell"><div><span className="kicker">Need help?</span><h2>Verify it step by step.</h2></div><p>The verification guide includes ready-to-copy commands for Terminal on macOS and PowerShell on Windows.</p><a href="/verify">Open verification guide →</a></section>
    <Footer />
  </main>;
}
