const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')

const fs = require('fs')
const path = require('path')

const dotenv = require('dotenv')

dotenv.config()

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'))

module.exports = withLess({
// cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]__[hash:base64:5]',
    },
    lessLoaderOptions: {
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables, // make your antd custom effective
        }
    },
    webpack: (config, options) => {

        const { isServer } = options

        if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/
            const origExternals = [...config.externals]
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback()
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback)
                    } else {
                        callback()
                    }},
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ]

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            })
        }

        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    }
})
