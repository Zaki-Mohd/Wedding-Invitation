import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js packages for Next.js compatibility
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  allowedDevOrigins: ['192.168.0.110'],
};


export default nextConfig;
