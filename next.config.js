/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./components/UI/ContentfulImage.tsx",
  },
};

module.exports = nextConfig;
