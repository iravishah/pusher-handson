const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//load config file
global.config = require('./lib/config')();

//load pusher file
const pusher = require('./lib/pusher');

//load routes
const routes = require('./routes/routes');

module.exports = class ExpressApp {
	constructor() {
		this.app = express();
		this.configurePusher();
		this.init();
		this.setErrorRoute();
		this.loadRoutes();
	}

	init() {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(express.static(path.join(__dirname, 'public')));
	}

	setErrorRoute() {
		// this.app.use((req, res, next) => {
		// 	const error404 = new Error('page not found');
		// 	error404.status = 404;
		// 	next(error404);
		// })
	}

	configurePusher() {
		global.pusher = new pusher();
	}

	loadRoutes() {
		let appRoutes = new routes(this.app);
		appRoutes.routes();
	}

	startApp() {
		this.app.listen(global.config.PORT || 8888, () => console.log(`Running app on ${global.config.PORT}`));
	}
}