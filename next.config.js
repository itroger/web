const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const lessToJS = require('less-vars-to-js')

const fs = require('fs')
const path = require('path')
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'))

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        distDir: 'build',
        exportTrailingSlash: true,

        webpack: (config, options) => {
            const {dev, isServer} = options
            const { lessLoaderOptions = {} } = nextConfig

            // 本地 less 设置
            config.module.rules.push({
                test: /\.less$/,
                exclude: /node_modules/,
                use: cssLoaderConfig(config, {
                    extensions: ['less'],
                    cssModules: true,
                    cssLoaderOptions: {
                        importLoader: 1,
                        localIdentName: '[local]__[hash:base64:5]'
                    },
                    dev,
                    isServer,
                    loaders: [{
                        loader: 'less-loader',
                        options: lessLoaderOptions
                    }]
                })
            })

            // antd less 设置
            config.module.rules.push({
                test: /\.less$/,
                include: /node_modules/,
                use: cssLoaderConfig(config, {
                    extensions: ['less'],
                    cssModules: false,
                    cssLoaderOptions: {},
                    dev,
                    isServer,
                    loaders: [{
                        loader: 'less-loader',
                        options: {
                            ...lessLoaderOptions,
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: themeVariables
                            }
                        }
                    }]
                })
            })

            // node-vibrant 设置
            config.module.rules.push({
                test: /\.worker.js$/,
                loader: 'worker-loader'
            })

            return config
        }
    })
}
