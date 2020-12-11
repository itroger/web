const cssLoaderConfig = require('@zeit/next-css/css-loader-config')

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            const { dev, isServer } = options
            const {
                cssModules,
                cssLoaderOptions,
                lessLoaderOptions = {}
            } = nextConfig

            options.defaultLoaders.less = cssLoaderConfig(config, {
                extensions: ['less'],
                cssModules,
                cssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    {
                        loader: 'less-loader',
                        options: lessLoaderOptions
                    }
                ]
            })

            config.module.rules.push({
                test: /\.less/,
                use: options.defaultLoaders.less
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}
