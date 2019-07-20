const config = require('config');
const logger = require('./logger');

// Next.js app server
const dev = process.env.NODE_ENV !== 'production';
const nextApp = require('next')({ dev });
const handleNextRequest = nextApp.getRequestHandler();
nextApp.prepare().then(() => {
	const app = require('./app');

	//
	// Route static asset requests to Express
	//
	app.get('/public/:asset', req => {
		return app.render('/public', req.params.asset);
	});

	//
	// Route specific request paths to Next.js
	//
	app.use('/', (req, res) => handleNextRequest(req, res));
	app.get('/posts/', (req, res) => {
		return nextApp.render(req, res, '/posts');
	});
	app.get('/posts/:id', (req, res) => {
		return nextApp.render(req, res, '/posts', { id: req.params.id });
	});

	//
	// Default: Route requests to Next.js
	//
	app.get('*', (req, res) => {
		return handleNextRequest(req, res);
	});

	//
	// Configure a middleware for 404s and the error handler
	//
	app.use(function(req, res) {
		const errorMessage = 'Resource not found.';
		logger.error(errorMessage, ' req: ', req);
		res.status(404).send(errorMessage);
	});
	app.use(function(err, req, res) {
		const errorMessage = 'Server error.';
		logger.error(errorMessage, '; req: ', req, '; error: ', err.stack);
		res.status(500).send(errorMessage);
	});

	//
	// Listen on port
	//
	const port = config.get('port');
	const server = app.listen(port);
	process.on('unhandledRejection', (reason, p) =>
		logger.error('Unhandled Rejection at: Promise ', p, '; reason: ', reason),
	);
	server.on('listening', () =>
		logger.info(
			'Application started on http://%s:%d',
			config.get('host'),
			port,
		),
	);
});
