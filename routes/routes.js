module.exports = class Route {
	constructor(app) {
		this.app = app;
	}

	routes() {
		this.app.get('/ping', (req, res) => {
			res.status(200).json({'result': 'pong'})
		})
	}
}