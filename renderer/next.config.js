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
        return config;
    },
};
