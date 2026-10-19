import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400", "700"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const description = "Convert, compress, and edit files locally on macOS and Windows. No uploads, accounts, cookies, analytics, or tracking.";
  const image = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: "OrbitDrop — Private desktop file tools",
    description,
    icons: { icon: "/icon.png", apple: "/icon.png" },
    openGraph: { title: "OrbitDrop", description, type: "website", images: [{ url: image, width: 1200, height: 630, alt: "OrbitDrop — Files move. Your data doesn’t." }] },
    twitter: { card: "summary_large_image", title: "OrbitDrop", description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${spaceMono.variable}`}>{children}</body></html>;
}
