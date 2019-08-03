const process = require('process');

let testSpec = '(spec)';
if (!process.env.TESTSPEC) {
	testSpec = '(spec)';
} else if (process.env.TESTSPEC === 'spec') {
	testSpec = '(spec)';
} else if (process.env.TESTSPEC === 'test') {
	testSpec = '(test)';
} else {
	testSpec = '(spec|test)';
}

export default function config() {
	return {
		files: [
			'client/**/*.' + testSpec + '.js',
			'pages/**/*.' + testSpec + '.js',
			'server/**/*.' + testSpec + '.js',
			'test/**/*.' + testSpec + '.js'
		],
		sources: ['client/**/*', 'pages/**/*', 'server/**/*', 'test/**/*'],
		cache: false,
		concurrency: 5,
		failFast: true,
		failWithoutAssertions: false,
		environmentVariables: {
			NODE_ENV: 'testing',
		},
		tap: true,
		verbose: true,
		compileEnhancements: false,
		require: [
			'esm',
			'./.babel.register.test.js'
		],
		babel: {
			testOptions: {
				plugins: [
					'babel-plugin-rewire'
				],
			},
		},
	};
}
