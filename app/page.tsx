import type { Metadata } from "next";
import { DownloadChooser } from "./DownloadChooser";

export const metadata: Metadata = {
  title: "OrbitDrop — Private file tools for your desktop",
  description:
    "Download OrbitDrop for macOS or Windows. Convert, compress, and edit files locally without uploads, accounts, cookies, or tracking.",
};

const actions = [
  ["PDF", "Documents + images"],
  ["PNG", "Lossless images"],
  ["JPG", "Smaller photos"],
  ["TIFF", "Print-ready images"],
  ["BMP", "Universal bitmap"],
  ["ZIP", "Files + folders"],
  ["Shrink", "Lighter files"],
  ["Resize", "50% dimensions"],
  ["Rotate", "90° clockwise"],
  ["Flip", "Horizontal mirror"],
  ["Gray", "Grayscale image"],
  ["Copy", "Safe duplicate"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="OrbitDrop home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          OrbitDrop
        </a>
        <div className="nav-links">
          <a href="#actions">Actions</a>
          <a href="#privacy">Privacy</a>
          <a href="#download" className="nav-download">Download</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Native on macOS + Windows</div>
          <h1>Files move.<br /><em>Your data doesn’t.</em></h1>
          <p className="hero-lede">
            Convert, compress, and edit files from a transparent radial menu—right where they already live. No browser conversion. No uploads. No account.
          </p>
          <DownloadChooser compact />
          <div className="trust-row" aria-label="Privacy promises">
            <span>✓ 100% local processing</span>
            <span>✓ No telemetry</span>
            <span>✓ No sign-up</span>
          </div>
        </div>

        <div className="orbit-stage" aria-label="Preview of the OrbitDrop radial menu">
          <div className="orbit-glow" />
          <div className="file-card back-card"><b>IMG</b><span>brand-photo.png</span></div>
          <div className="file-card"><b>DOCX</b><span>project-brief.docx</span></div>
          <div className="radial-demo">
            <div className="radial-ring" />
            {actions.map(([name], index) => (
              <span
                className={`radial-label radial-label-${index}`}
                key={name}
                aria-hidden="true"
              >{name}</span>
            ))}
            <div className="radial-core"><strong>DOCX</strong><span>project-brief</span><small>DRAG &amp; RELEASE</small></div>
          </div>
          <span className="cursor-note">Right-click</span>
        </div>
      </section>

      <section className="proof-strip" aria-label="OrbitDrop summary">
        <div className="shell proof-grid">
          <p><strong>12</strong><span>instant actions</span></p>
          <p><strong>0</strong><span>files uploaded</span></p>
          <p><strong>2</strong><span>native platforms</span></p>
          <p><strong>∞</strong><span>offline use</span></p>
        </div>
      </section>

      <section className="actions-section shell" id="actions">
        <div className="section-heading">
          <div><span className="kicker">One gesture, twelve tools</span><h2>Meet your new right-click.</h2></div>
          <p>Choose a file, right-click, then drag into an action. OrbitDrop creates a new file beside the original so your source stays untouched.</p>
        </div>
        <div className="action-grid">
          {actions.map(([name, detail], index) => (
            <article className="action-card" key={name}>
              <span className="action-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{name}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="shell privacy-grid">
          <div className="privacy-copy">
            <span className="kicker light">Privacy isn’t a setting</span>
            <h2>It’s the architecture.</h2>
            <p>OrbitDrop has nothing to collect because your files never leave your computer. The app has no user accounts, cloud converter, analytics SDK, advertising ID, or telemetry endpoint.</p>
            <div className="privacy-stamp"><span aria-hidden="true">◎</span><div><strong>Zero-data design</strong><small>Works without an internet connection</small></div></div>
          </div>
          <div className="privacy-list">
            <article><span>01</span><div><h3>No uploads</h3><p>Every conversion and edit runs on your Mac or PC.</p></div></article>
            <article><span>02</span><div><h3>No tracking</h3><p>No analytics, cookies, fingerprinting, pixels, or behavior logs.</p></div></article>
            <article><span>03</span><div><h3>No account</h3><p>Download, launch, and use it. No email address required.</p></div></article>
            <article><span>04</span><div><h3>No hidden overwrite</h3><p>Outputs are saved as new files beside your originals.</p></div></article>
          </div>
        </div>
      </section>

      <section className="download-section shell" id="download">
        <div className="download-panel">
          <div className="download-copy">
            <span className="kicker">OrbitDrop 0.3</span>
            <h2>Your desktop just got a shortcut.</h2>
            <p>Pick your operating system. The website checks only your browser’s local device label to suggest the right file; that result is never sent or stored.</p>
          </div>
          <DownloadChooser />
        </div>
      </section>

      <section className="compatibility shell" aria-labelledby="compatibility-title">
        <div><span className="kicker">Compatibility</span><h2 id="compatibility-title">Built for your OS.</h2></div>
        <article><div className="os-icon apple">●</div><div><h3>macOS</h3><p>macOS 13 or later</p><small>Universal app for Apple Silicon and Intel</small></div></article>
        <article><div className="os-icon windows"><i /><i /><i /><i /></div><div><h3>Windows</h3><p>Windows 10 or 11</p><small>64-bit, self-contained executable</small></div></article>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand inverse" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>OrbitDrop</a>
          <p>Private file tools that stay on your computer.</p>
          <div><a href="/downloads/SHA256SUMS.txt">Checksums</a><a href="#privacy">Privacy</a></div>
        </div>
      </footer>
    </main>
  );
}
