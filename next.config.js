/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    /* basePath: '/polify', */
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.graphassets.com",
            },
        ],
    },
};

module.exports = nextConfig;
