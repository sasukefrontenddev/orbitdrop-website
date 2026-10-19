"use client";

import { useSyncExternalStore } from "react";
import { AppleIcon, DownloadIcon, WindowsIcon } from "./Icons";
import type { OrbitDropRelease } from "../lib/release";

type DesktopOS = "mac" | "windows" | "other";
function detectOS(): DesktopOS {
  const label = `${navigator.platform || ""} ${navigator.userAgent || ""}`.toLowerCase();
  if (label.includes("mac")) return "mac";
  if (label.includes("win")) return "windows";
  return "other";
}

const subscribeToDeviceLabel = () => () => {};
const serverDeviceLabel = (): DesktopOS => "other";

export function DownloadChooser({ compact = false, release }: { compact?: boolean; release: OrbitDropRelease }) {
  const os = useSyncExternalStore(subscribeToDeviceLabel, detectOS, serverDeviceLabel);
  const macDetail = `macOS 13+ · Universal · ${Math.max(1, Math.round(release.macos.bytes / 1024))} KB`;
  const windowsDetail = `Windows 10/11 · x64 · ${Math.round(release.windows.bytes / (1024 * 1024))} MB`;

  if (compact) {
    if (os === "windows") {
      return (
        <div className="compact-downloads">
          <a className="primary-button" href={release.windows.url}>
            <WindowsIcon />Download for Windows<DownloadIcon />
          </a>
          <a className="text-link" href="#download">See both versions <span>→</span></a>
        </div>
      );
    }
    return (
      <div className="compact-downloads">
        <a className="primary-button" href={release.macos.url}>
          <AppleIcon />{os === "mac" ? "Download for macOS" : "Download OrbitDrop"}<DownloadIcon />
        </a>
        <a className="text-link" href="#download">See both versions <span>→</span></a>
      </div>
    );
  }

  return (
    <div className="release-list">
      <a className={`release-card ${os === "mac" ? "recommended" : ""}`} href={release.macos.url}>
        <span className="release-icon" aria-hidden="true"><AppleIcon /></span>
        <span><strong>Download for macOS</strong><small>{macDetail}</small></span>
        {os === "mac" && <em>Recommended</em>}
        <DownloadIcon />
      </a>
      <a className={`release-card ${os === "windows" ? "recommended" : ""}`} href={release.windows.url}>
        <span className="release-icon" aria-hidden="true"><WindowsIcon /></span>
        <span><strong>Download for Windows</strong><small>{windowsDetail}</small></span>
        {os === "windows" && <em>Recommended</em>}
        <DownloadIcon />
      </a>
      <p className="detection-note"><span aria-hidden="true">●</span> Device detection happens only in your browser. Downloads come directly from the official GitHub release and this site stores nothing.</p>
    </div>
  );
}
