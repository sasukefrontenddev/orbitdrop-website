import type { Metadata } from "next";
import { AppleIcon, ShieldIcon, WindowsIcon } from "../Icons";
import { Footer, Header } from "../SiteChrome";
import { CopyChecksum } from "./CopyChecksum";
import { getLatestRelease } from "../../lib/release";

export const metadata: Metadata = { title: "Checksums — OrbitDrop", description: "Official SHA-256 checksums for the latest OrbitDrop downloads." };

export default async function ChecksumsPage() {
  const release = await getLatestRelease();
  const releases = [
    { platform: "macOS", file: release.macos.file, hash: release.macos.sha256, Icon: AppleIcon },
    { platform: "Windows", file: release.windows.file, hash: release.windows.sha256, Icon: WindowsIcon },
  ];
  return <main>
    <Header />
    <section className="checksum-hero shell">
      <span className="checksum-shield"><ShieldIcon /></span>
      <span className="kicker">Release integrity · Version {release.version}</span>
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
        <a href={release.checksumsUrl}>Download SHA256SUMS.txt ↓</a>
      </div>
    </section>
    <section className="checksum-help shell"><div><span className="kicker">Need help?</span><h2>Verify it step by step.</h2></div><p>The verification guide includes ready-to-copy commands for Terminal on macOS and PowerShell on Windows.</p><a href="/verify">Open verification guide →</a></section>
    <Footer />
  </main>;
}
