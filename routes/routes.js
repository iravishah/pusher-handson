const pusher = require('../lib/pusher');

module.exports = class Route {
	constructor(app) {
		this.app = app;
		this.pusher = new pusher();
	}

	routes() {
		this.app.get('/ping', (req, res) => {
			this.pusher.publish('pusher-test', 'ping', {'result': 'pong'});
			res.status(200).json({'result': 'pong'})
		})

		this.app.post('/comment', (req, res) => {
			const body = req.body || {};
			const comment = {
				name: body.name,
				email: body.email,
				comment: body.comment
			}
			this.pusher.publish('pusher-test', 'comment', comment);
			res.status(200).json({'result': 'comment published'});
		})
	}
}