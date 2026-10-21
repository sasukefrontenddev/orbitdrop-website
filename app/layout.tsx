import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const description = "Hold your chosen key to convert, compress, and edit files locally on macOS and Windows. No uploads, accounts, cookies, analytics, or tracking.";
  const image = new URL("/og-v061.png", metadataBase).toString();

  return {
    metadataBase,
    title: "OrbitDrop — Private desktop file tools",
    description,
    icons: { icon: "/icon.png", apple: "/icon.png" },
    openGraph: { title: "OrbitDrop", description, type: "website", images: [{ url: image, width: 1200, height: 630, alt: "OrbitDrop 0.6.1 — reliable in-place updates for private desktop file tools." }] },
    twitter: { card: "summary_large_image", title: "OrbitDrop", description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
