/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack: (config, { dev, isServer }) => {
        // This will make Webpack generate full source maps
        if (dev && !isServer) {
            config.devtool = 'eval-source-map'
        }
        return config
    }
};

export default nextConfig;
