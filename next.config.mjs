/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { qualities: [50, 75] },
  turbopack: {
    rules: {
      "*.txt": {
        loaders: [{ loader: "raw-loader" }],
        as: "*.js",
      },
    },
  },
}

export default nextConfig
