/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        qualities: [75, 100],
    },
    turbopack: {
        root: import.meta.dirname,
    },
};

export default nextConfig;