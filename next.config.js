const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
	require.extensions['.less'] = () => {}
}

module.exports = withCss({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]__[hash.base64:5]'
	},
	...withLess({
		options: {
			lessOptions: {
				javascriptEnabled: true
			}
		}
	})
})