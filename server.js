const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//load config file
global.config = require('./lib/config')();

module.exports = class ExpressApp {
	constructor() {
		this.app = express();
		this.init();
	}

	init() {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(express.static(path.join(__dirname, 'public')));
	}

	startApp() {
		this.app.listen(config.PORT || 8888, () => console.log(`Running app on ${config.PORT}`));
	}
}