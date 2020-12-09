const withLess = require('@zeit/next-less')
const { getThemeVariables } = require('antd/dist/theme')
module.exports = withLess({
    cssModules: true,
    lessOptions: {
        javascriptEnabled: true,
        modifyVars: getThemeVariables({
            dark: true
        })
    }
})
