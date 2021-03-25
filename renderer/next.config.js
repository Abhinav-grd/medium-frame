const WorkerPlugin = require('worker-plugin');

module.exports = {
    webpack: (config, options) => {
        config.target = 'electron-renderer';
        if (options.isServer) {
            config.plugins.push(
                new WorkerPlugin({
                    // use "self" as the global object when receiving hot updates.
                    globalObject: 'self',
                })
            );
        }
        config.module.rules.push({
            test: /\.worker\.js$/,
            loader: 'worker-loader',
            options: {
                filename: 'static/[hash].worker.js',
                publicPath: '/_next/',
            },
        });
        return config;
    },
};
