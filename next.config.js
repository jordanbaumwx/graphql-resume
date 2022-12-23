module.exports = {
  experimental: { appDir: true },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true,
    };

    return config;
  },
};
