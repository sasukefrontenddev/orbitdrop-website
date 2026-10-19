import type { Metadata } from "next";
import { InfoPage } from "../InfoPage";

export const metadata: Metadata = { title: "Terms of Use — OrbitDrop", description: "Terms for using the OrbitDrop website and desktop software." };

export default function TermsPage() {
  return <InfoPage eyebrow="Terms of use · Updated 19 October 2026" title="Clear, simple terms." introduction="These terms apply to this website and the OrbitDrop desktop software. By downloading or using OrbitDrop, you agree to them." sections={[
    { title: "Using OrbitDrop", content: <><p>You may use OrbitDrop for lawful personal or business file tasks. You are responsible for the files you process, the rights to their content, and the outputs you create.</p><p>Do not use OrbitDrop to violate law, infringe another person’s rights, distribute malware, or interfere with the website or its downloads.</p></> },
    { title: "Your files", content: <><p>You retain all rights in your files. OrbitDrop does not claim ownership of source files or outputs. The desktop app processes them locally and does not upload them to an OrbitDrop conversion service.</p></> },
    { title: "Software and updates", content: <><p>Features, supported formats, and system requirements may change between releases. Release notes identify material changes and known limitations. Download only from the official website and verify the published checksum when integrity matters.</p></> },
    { title: "No warranty", content: <><p>OrbitDrop is provided as available, without promises that every file or format will work perfectly. Keep backups of important data and review outputs before relying on them. To the extent permitted by law, OrbitDrop is not responsible for indirect or consequential loss resulting from use of the software.</p></> },
    { title: "Third-party platforms", content: <><p>Apple, macOS, Microsoft, and Windows belong to their respective owners. OrbitDrop is an independent product and is not endorsed by Apple or Microsoft. Your use of those platforms remains subject to their terms.</p></> },
    { title: "Changes", content: <><p>These terms may be updated as the product changes. The revision date at the top identifies the version currently published.</p></> },
  ]} />;
}
