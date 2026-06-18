const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProduction ? "/NoSpoiler-Highlights" : "",
  assetPrefix: isProduction ? "/NoSpoiler-Highlights/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
