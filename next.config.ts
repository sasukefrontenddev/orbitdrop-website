import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/downloads/SHA256SUMS.txt",
        destination: "https://github.com/sasukefrontenddev/orbitdrop/releases/latest/download/SHA256SUMS.txt",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
