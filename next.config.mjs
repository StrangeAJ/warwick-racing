/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    crossOrigin: 'anonymous',
    images: {
        unoptimized: true, // Required for static export with Next.js Image component
      },
};

export default nextConfig;
