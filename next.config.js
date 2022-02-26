/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['coffee', 'js'],

	webpack(config, options) {
		const { dir, defaultLoaders } = options
		config.resolve.extensions.push('.coffee')

		config.module.rules.push({
			test: /\.(coffee)$/,
			include: [dir],
			exclude: /node_modules/,
			use: [
				defaultLoaders.babel, // <---- does NOT handle source maps from coffee-loader
				{loader: 'source-map-loader'},
				// {loader: 'babel-loader'}, // <----- handles source maps fine
				{loader: 'coffee-loader'},
			],
		})

		return config
	},
}

module.exports = nextConfig
