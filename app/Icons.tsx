type IconProps = { className?: string };

export function AppleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M17.05 12.54c-.03-3.08 2.51-4.56 2.63-4.63a5.65 5.65 0 0 0-4.45-2.4c-1.87-.2-3.68 1.12-4.63 1.12-.97 0-2.44-1.1-4.02-1.06a5.9 5.9 0 0 0-4.97 3.03c-2.15 3.72-.55 9.19 1.51 12.2 1.03 1.47 2.24 3.12 3.81 3.06 1.54-.06 2.12-.98 3.98-.98 1.84 0 2.39.98 4  .95 1.65-.03 2.69-1.48 3.68-2.96a12.1 12.1 0 0 0 1.68-3.43 5.27 5.27 0 0 1-3.22-4.9ZM14.01 3.53A5.35 5.35 0 0 0 15.23 0a5.45 5.45 0 0 0-3.52 1.68 5.07 5.07 0 0 0-1.25 3.4 4.5 4.5 0 0 0 3.55-1.55Z" />
    </svg>
  );
}

export function WindowsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M2 4.55 10.2 3.4v7.91H2V4.55Zm9.3-1.3L22 1.77v9.54H11.3V3.25ZM2 12.42h8.2v7.93L2 19.22v-6.8Zm9.3 0H22v9.58L11.3 20.5v-8.08Z" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M5 21h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 12h14m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m5 12.5 4.2 4.2L19.5 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ToolIcon({ name, className }: IconProps & { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const normalized = name.toLowerCase();

  if (["pdf", "copy"].includes(normalized)) {
    return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M7 3h7l4 4v14H7zM14 3v5h5M10 13h5m-5 4h5" /></svg>;
  }
  if (["png", "jpg", "tiff", "bmp", "gray"].includes(normalized)) {
    return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="3" y="4" width="18" height="16" rx="3" /><circle {...common} cx="9" cy="10" r="2" /><path {...common} d="m5.5 18 4.7-4.7 3.1 3.1 2.2-2.2 3 3" /></svg>;
  }
  if (normalized === "zip") {
    return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 7h6l2 2h8v11H4zM9 3h6l2 4H7zM12 10v7m-2-5h2m0 3h2" /></svg>;
  }
  if (normalized === "shrink") {
    return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M8 3v5H3m18 8h-5v5M3 8l6 6m12 2-6-6" /></svg>;
  }
  if (normalized === "resize") {
    return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M8 3H3v5m13 13h5v-5M3 3l7 7m11 11-7-7M14 3h7v7M21 3l-7 7M3 21l7-7" /></svg>;
  }
  if (normalized === "rotate") {
    return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M20 8V3m0 0h-5m5 0-4 4a8 8 0 1 0 2 8" /></svg>;
  }
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M4 5h16v14H4zM12 5v14m-3-4 3 3 3-3" /></svg>;
}

export function ShieldIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5.3-3.3 8.7-8 10-4.7-1.3-8-4.7-8-10V6l8-3Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
