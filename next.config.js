/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2zvpvbhxfhkylxac.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
