const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/oberon-docs" : "";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  output: 'export', 
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
