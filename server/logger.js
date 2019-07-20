const config = require('config');
const winston = require('winston');
const { defaultTo } = require('rambdax');

const logger = winston.createLogger({
	transports: [
		new winston.transports.File({
			level: defaultTo('info', config.get('logLevel.file')),
			filename: './logs/all.log',
			format: winston.format.combine(
				winston.format.splat(),
				winston.format.simple(),
			),
			handleExceptions: true,
			json: true,
			maxsize: 5242880, //5MB
			maxFiles: 5,
			colorize: false,
		}),
		new winston.transports.Console({
			level: defaultTo('info', config.get('logLevel.console')),
			format: winston.format.combine(
				winston.format.splat(),
				winston.format.simple(),
			),
			handleExceptions: true,
			json: false,
			colorize: true,
		}),
	],
	exitOnError: false,
});

module.exports = logger;
