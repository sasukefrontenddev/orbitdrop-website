import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { DownloadChooser } from "./DownloadChooser";
import { AppleIcon, ArrowIcon, CheckIcon, ShieldIcon, ToolIcon, WindowsIcon } from "./Icons";
import { Footer, Header } from "./SiteChrome";
import { getLatestRelease } from "../lib/release";

export const metadata: Metadata = {
  title: "OrbitDrop — Private desktop file tools",
  description: "Convert, compress, and edit files locally on macOS and Windows. No uploads, accounts, cookies, analytics, or tracking.",
};

const actions = [
  { name: "PDF", detail: "Turn documents and images into portable PDFs.", category: "Convert" },
  { name: "PNG", detail: "Create crisp, lossless images with transparency.", category: "Convert" },
  { name: "JPG", detail: "Make compact images ready to share.", category: "Convert" },
  { name: "TIFF", detail: "Export high-quality images for print workflows.", category: "Convert" },
  { name: "BMP", detail: "Create widely compatible bitmap files.", category: "Convert" },
  { name: "ZIP", detail: "Bundle files and folders into one archive.", category: "Organize" },
  { name: "Shrink", detail: "Adaptively target a substantially smaller, share-ready file.", category: "Optimize" },
  { name: "Resize", detail: "Scale an image to 50% in one gesture.", category: "Edit" },
  { name: "Rotate", detail: "Turn an image 90 degrees clockwise.", category: "Edit" },
  { name: "Flip", detail: "Mirror an image horizontally.", category: "Edit" },
  { name: "Gray", detail: "Convert an image to clean grayscale.", category: "Edit" },
  { name: "Copy", detail: "Create a safe duplicate beside the source.", category: "Organize" },
];

const faqs = [
  ["Does OrbitDrop upload my files?", "No. File conversion and editing happen locally inside the desktop app. Your files never travel through this website or an OrbitDrop server."],
  ["Does the website track visitors?", "No. There are no analytics scripts, advertising pixels, accounts, cookies, or behavioral profiles. Device detection only selects a suggested download in your browser."],
  ["Will OrbitDrop overwrite my originals?", "No. OrbitDrop creates a new output beside the original file, so the source stays intact."],
  ["Can it work without internet?", "Yes. After downloading the app, conversions, compression, and image edits run offline."],
  ["Which computers are supported?", "OrbitDrop supports macOS 13 or later on Apple Silicon and Intel, plus 64-bit Windows 10 and Windows 11."],
];

export default async function Home() {
  const release = await getLatestRelease();
  return (
    <main>
      <Header />

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Private by architecture · Native by design</div>
          <h1>The fastest way from <em>file</em> to finished.</h1>
          <p className="hero-lede">Hold right-click, glide to the action you need, and release. OrbitDrop converts, compresses, and edits directly on your desktop—without opening a website or uploading a thing.</p>
          <DownloadChooser compact release={release} />
          <div className="trust-row" aria-label="Privacy promises">
            <span><CheckIcon /> 100% local processing</span>
            <span><CheckIcon /> No sign-up</span>
            <span><CheckIcon /> Free download</span>
          </div>
        </div>

        <div className="product-visual" aria-label="OrbitDrop radial command menu preview">
          <div className="visual-topbar"><span /><span /><span /><small>ORBITDROP · READY</small></div>
          <div className="visual-file"><ToolIcon name="pdf" /><span><small>SELECTED FILE</small><strong>project-brief.docx</strong></span></div>
          <div className="radial-demo">
            <div className="radial-ring" />
            {actions.map((action, index) => (
              <span className="radial-label" style={{ "--i": index } as CSSProperties} key={action.name}>
                <ToolIcon name={action.name} /><b>{action.name}</b>
              </span>
            ))}
            <div className="radial-core"><span className="core-logo"><Image src="/orbitdrop-logo.png" alt="" width={64} height={64} unoptimized /></span><strong>project-brief</strong><small>HOLD · GLIDE · RELEASE</small></div>
          </div>
          <div className="visual-status"><span className="status-dot" /><b>Runs on your device</b><small>Nothing uploaded</small></div>
          <div className="cursor-chip">Right-click <span>↗</span></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="OrbitDrop product summary">
        <div className="shell proof-grid">
          <p><strong>12</strong><span>instant file actions</span></p>
          <p><strong>0</strong><span>files uploaded</span></p>
          <p><strong>2</strong><span>native platforms</span></p>
          <p><strong>∞</strong><span>offline use</span></p>
        </div>
      </section>

      <section className="features-section shell" id="features">
        <div className="section-heading">
          <div><span className="kicker">One gesture · Twelve tools</span><h2>Your everyday file workflow, simplified.</h2></div>
          <p>Conversion, compression, archiving, and image adjustments live in one balanced radial menu. The original always stays untouched.</p>
        </div>
        <div className="action-grid">
          {actions.map((action, index) => (
            <article className="action-card" key={action.name}>
              <div className="action-card-top"><span className="action-icon"><ToolIcon name={action.name} /></span><small>{action.category}</small></div>
              <h3>{action.name}</h3>
              <p>{action.detail}</p>
              <span className="action-number">{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="how-it-works">
        <div className="shell">
          <div className="section-heading centered"><div><span className="kicker">Built around muscle memory</span><h2>Three seconds. No detour.</h2></div><p>OrbitDrop meets you in the file system, so the fastest route is also the most private one.</p></div>
          <div className="workflow-grid">
            <article><span className="step-number">01</span><div className="step-visual select-visual"><span className="mini-file"><ToolIcon name="pdf" /> report.docx</span><i /></div><h3>Select a file</h3><p>Stay in Finder or File Explorer. Choose the file you want to work with.</p></article>
            <article><span className="step-number">02</span><div className="step-visual wheel-visual"><span /><span /><span /><i>+</i></div><h3>Hold right-click</h3><p>Keep the right mouse button held until the transparent command wheel appears.</p></article>
            <article><span className="step-number">03</span><div className="step-visual result-visual"><span><CheckIcon /></span><b>report.pdf</b><small>Saved beside original</small></div><h3>Glide and release</h3><p>Move to an action while holding, then release. You can also release first and left-click an action.</p></article>
          </div>
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="shell privacy-grid">
          <div className="privacy-copy">
            <span className="kicker light">Privacy is the product</span>
            <h2>Your files are none of our business.</h2>
            <p>OrbitDrop has no cloud conversion service to trust. The desktop app does the work on your computer and has no accounts, telemetry SDK, advertising ID, or analytics endpoint.</p>
            <a className="light-link" href="/privacy">Read the plain-language privacy notice <ArrowIcon /></a>
          </div>
          <div className="privacy-console">
            <div className="console-head"><ShieldIcon /><span><strong>LOCAL PROCESSING</strong><small>Privacy status</small></span><em>ACTIVE</em></div>
            <div className="console-line"><span>Files uploaded</span><b>0</b></div>
            <div className="console-line"><span>Tracking requests</span><b>0</b></div>
            <div className="console-line"><span>Accounts required</span><b>0</b></div>
            <div className="console-line"><span>Internet required after install</span><b>NO</b></div>
            <div className="console-foot"><span /><p>All file operations stay within your operating system.</p></div>
          </div>
        </div>
      </section>

      <section className="download-section shell" id="download">
        <div className="download-panel">
          <div className="download-copy">
            <span className="kicker">OrbitDrop {release.version} · Free download</span>
            <h2>Give your desktop a better right-click.</h2>
            <p>Choose your platform. Device detection happens only in your browser to suggest the correct version and is never transmitted or stored.</p>
            <div className="download-security"><ShieldIcon /><span><strong>Verified release</strong><small>SHA-256 checksums published for both installers</small></span></div>
          </div>
          <DownloadChooser release={release} />
        </div>
      </section>

      <section className="compatibility shell" aria-labelledby="compatibility-title">
        <div className="compat-intro"><span className="kicker">Native on both platforms</span><h2 id="compatibility-title">Made for your operating system.</h2></div>
        <article><div className="os-icon"><AppleIcon /></div><div><h3>OrbitDrop for macOS</h3><p>macOS 13 Ventura or later</p><small>Universal build · Apple Silicon + Intel</small></div></article>
        <article><div className="os-icon windows"><WindowsIcon /></div><div><h3>OrbitDrop for Windows</h3><p>Windows 10 or Windows 11</p><small>64-bit · Self-contained executable</small></div></article>
      </section>

      <section className="faq-section shell" id="faq">
        <div className="faq-heading"><span className="kicker">Good to know</span><h2>Questions, answered plainly.</h2><a href="/help">Visit the help center <ArrowIcon /></a></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => <details key={question}><summary><span className="faq-question"><i>{String(index + 1).padStart(2, "0")}</i>{question}</span><span className="faq-toggle">+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <Footer />
    </main>
  );
}
