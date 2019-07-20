module.exports = function(api) {

	const babelrc = {
		"presets": [
			"@babel/preset-env",
			"@babel/preset-flow",
			"@babel/preset-react",
			"next/babel"
		],
		"plugins": [
			[
				"module-resolver",
				{
					"root": ["./"],
					"alias": {
						"@client": "./client",
						"@config": "./config",
						"@pages": "./pages",
						"@public": "./public",
						"@server": "./server",
						"@test": "./test"
					}
				}
			]
		]
	};

	if (api.env('testing')) {
		require('@babel/register');
		require('jsdom-global/register');
		require.extensions['.css'] = () => {};
		require.extensions['.jpg'] = () => {};
		require.extensions['.png'] = () => {};
		require.extensions['.scss'] = () => {};
	}

	return babelrc;
}
