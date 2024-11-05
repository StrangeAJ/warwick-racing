/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Required for static export with Next.js Image component
      },
      experimental: {
        serverActions: true,
      },
};

export default nextConfig;
