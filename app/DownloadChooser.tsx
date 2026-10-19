"use client";

import { useEffect, useState } from "react";

type DesktopOS = "mac" | "windows" | "other";
type DownloadState = "idle" | "downloading" | "error";

const macRelease = {
  label: "Download for macOS",
  detail: "macOS 13+ · Apple Silicon + Intel · 344 KB",
  href: "/downloads/OrbitDrop-0.3.0-NATIVE-macOS-universal.zip",
  icon: "●",
};

const windowsRelease = {
  label: "Download for Windows",
  detail: "Windows 10/11 · 64-bit · 74 MB",
  icon: "⊞",
};

const windowsParts = [
  "/downloads/windows/OrbitDrop.exe.part-000",
  "/downloads/windows/OrbitDrop.exe.part-001",
  "/downloads/windows/OrbitDrop.exe.part-002",
  "/downloads/windows/OrbitDrop.exe.part-003",
];

function detectOS(): DesktopOS {
  const label = `${navigator.platform || ""} ${navigator.userAgent || ""}`.toLowerCase();
  if (label.includes("mac")) return "mac";
  if (label.includes("win")) return "windows";
  return "other";
}

export function DownloadChooser({ compact = false }: { compact?: boolean }) {
  const [os, setOS] = useState<DesktopOS>("other");
  const [downloadState, setDownloadState] = useState<DownloadState>("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => setOS(detectOS()), []);

  async function downloadWindows() {
    if (downloadState === "downloading") return;
    setDownloadState("downloading");
    setProgress(0);
    try {
      const pieces: Blob[] = [];
      for (let index = 0; index < windowsParts.length; index += 1) {
        const response = await fetch(windowsParts[index], { cache: "no-store" });
        if (!response.ok) throw new Error("A download piece was unavailable.");
        pieces.push(await response.blob());
        setProgress(Math.round(((index + 1) / windowsParts.length) * 100));
      }
      const objectURL = URL.createObjectURL(new Blob(pieces, { type: "application/vnd.microsoft.portable-executable" }));
      const link = document.createElement("a");
      link.href = objectURL;
      link.download = "OrbitDrop-0.3.0-NATIVE-Windows-x64.exe";
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(objectURL), 1500);
      setDownloadState("idle");
    } catch {
      setDownloadState("error");
    }
  }

  const windowsLabel = downloadState === "downloading"
    ? `Preparing Windows download… ${progress}%`
    : downloadState === "error"
      ? "Retry Windows download"
      : windowsRelease.label;

  if (compact) {
    if (os === "windows") {
      return (
        <div className="compact-downloads">
          <button className="primary-button" type="button" onClick={downloadWindows} disabled={downloadState === "downloading"}>
            <span aria-hidden="true">{windowsRelease.icon}</span>{windowsLabel}<b aria-hidden="true">↓</b>
          </button>
          <a className="text-link" href="#download">See both versions →</a>
        </div>
      );
    }
    return (
      <div className="compact-downloads">
        <a className="primary-button" href={macRelease.href} download>
          <span aria-hidden="true">{macRelease.icon}</span>{os === "mac" ? macRelease.label : "Download OrbitDrop"}<b aria-hidden="true">↓</b>
        </a>
        <a className="text-link" href="#download">See both versions →</a>
      </div>
    );
  }

  return (
    <div className="release-list">
      <a className={`release-card ${os === "mac" ? "recommended" : ""}`} href={macRelease.href} download>
        <span className="release-icon" aria-hidden="true">{macRelease.icon}</span>
        <span><strong>{macRelease.label}</strong><small>{macRelease.detail}</small></span>
        {os === "mac" && <em>Recommended</em>}
        <b aria-hidden="true">↓</b>
      </a>
      <button className={`release-card ${os === "windows" ? "recommended" : ""}`} type="button" onClick={downloadWindows} disabled={downloadState === "downloading"}>
        <span className="release-icon" aria-hidden="true">{windowsRelease.icon}</span>
        <span><strong>{windowsLabel}</strong><small>{windowsRelease.detail}</small></span>
        {os === "windows" && <em>Recommended</em>}
        <b aria-hidden="true">↓</b>
      </button>
      <p className="detection-note">Device detection and Windows file assembly happen only in browser memory. Nothing is transmitted or saved by this site.</p>
    </div>
  );
}
