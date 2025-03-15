import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
};

export default nextConfig;

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA({
//   reactStrictMode: true,
// });
