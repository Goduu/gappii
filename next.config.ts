import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["graphql"],
  experimental: {
    reactCompiler: true,
  },
}

export default nextConfig;
