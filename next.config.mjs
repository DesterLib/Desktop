/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.FLUENTFFMPEG_COV": JSON.stringify(false),
      })
    );
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
