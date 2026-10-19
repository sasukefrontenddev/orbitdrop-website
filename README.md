# OrbitDrop website

The public, privacy-first download and documentation website for [OrbitDrop](https://github.com/sasukefrontenddev/orbitdrop), a native macOS and Windows file utility.

**Live site:** [orbitdropapp.vercel.app](https://orbitdropapp.vercel.app)

## Purpose

This repository contains the commercial product site, platform-aware downloads, release notes, help pages, system requirements, privacy and security documentation, and the official SHA-256 checksum directory.

The website does not convert files. All conversion, compression, and image editing happen inside the native desktop app.

## Privacy architecture

- No analytics or advertising scripts
- No accounts or user database
- No cookies or behavioral profiles
- No file uploads or conversion API
- No browser storage
- Platform detection runs only in browser memory

Automated tests guard these promises by checking the source for storage, tracking, uploads, and write requests.

## Technology

- Next.js 16 and React 19
- TypeScript
- vinext and Vite
- Cloudflare Workers-compatible output
- OpenAI Sites deployment metadata

## Local development

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
```

`npm test` creates a production build, renders every public support route, verifies the checksum directory, and confirms the absence of tracking and persistence code.

## Related project

The native desktop source and release installers live in the [OrbitDrop repository](https://github.com/sasukefrontenddev/orbitdrop).

## Repository policy

The source is published for transparency and portfolio review. See [LICENSE](LICENSE) before copying or redistributing it.
