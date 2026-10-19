import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./Icons";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? "brand-inverse" : ""}`} href="/" aria-label="OrbitDrop home">
      <span className="brand-logo"><Image src="/orbitdrop-logo.png" alt="" width={36} height={36} unoptimized /></span>
      <span className="brand-type"><strong>OrbitDrop</strong><small>DESKTOP FILE TOOLS</small></span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <Brand />
        <div className="nav-links">
          <Link href="/#features">Features</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/help">Help</Link>
        </div>
        <Link href="/#download" className="nav-download">Download free <ArrowIcon /></Link>
      </nav>
    </header>
  );
}

const footerGroups = [
  { title: "Product", links: [["Features", "/#features"], ["Download", "/#download"], ["Release notes", "/releases"], ["System requirements", "/requirements"]] },
  { title: "Resources", links: [["Help center", "/help"], ["Getting started", "/help#getting-started"], ["Verify a download", "/verify"], ["Checksums", "/checksums"]] },
  { title: "Trust", links: [["Privacy", "/privacy"], ["Security", "/security"], ["Terms", "/terms"], ["Offline architecture", "/security#architecture"]] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Brand inverse />
          <p>Fast file tools that work entirely on your computer.</p>
          <div className="footer-promise"><span /> No cloud. No account. No tracking.</div>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
          </div>
        ))}
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 OrbitDrop</span>
        <span>Built for macOS and Windows · Version 0.3.0</span>
      </div>
    </footer>
  );
}
