const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');

// for those who using CDN
const { ASSET_HOST } = process.env;
const assetPrefix = ASSET_HOST || '';

module.exports = withPlugins([[withSass]], {
	// eslint-disable-next-line no-unused-vars
	webpack: (config, { dev }) => {
		config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;

		const aliases = config.resolve.alias || {};
		config.resolve.alias = {
			...aliases,
			'@client': path.resolve(__dirname, 'client'),
			'@config': path.resolve(__dirname, 'config'),
			'@pages': path.resolve(__dirname, 'pages'),
			'@public': path.resolve(__dirname, 'public'),
			'@server': path.resolve(__dirname, 'server'),
			'@test': path.resolve(__dirname, 'test'),
		};

		return config;
	},
});

