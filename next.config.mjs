/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*nlifkoubtbrroxaogxfc.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
