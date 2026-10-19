"use client";

import { useState } from "react";

export function CopyChecksum({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return <button className="copy-checksum" type="button" onClick={copy}>{copied ? "Copied" : "Copy hash"}</button>;
}
