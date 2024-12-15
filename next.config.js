/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fabian-portfolio-project-images.s3.af-south-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
