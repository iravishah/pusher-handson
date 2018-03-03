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
		this.init();
		this.loadRoutes();
	}

	init() {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(express.static(path.join(__dirname, 'public')));
	}

	loadRoutes() {
		let appRoutes = new routes(this.app);
		appRoutes.routes();
	}

	startApp() {
		this.app.listen(config.PORT || 8888, () => console.log(`Running app on ${config.PORT}`));
	}
}