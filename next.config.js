/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    basePath: '/polify',
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
