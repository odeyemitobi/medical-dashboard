import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fedskillstest.ct.digital",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
