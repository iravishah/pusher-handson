const Pusher = require('pusher');

module.exports = class PusherApp {
	constructor() {
		this.pusher = new Pusher({
			appId: config.PUSHER.APP_ID,
			key: config.PUSHER.KEY,
			secret: config.PUSHER.SECRET,
			cluster: config.PUSHER.CLUSTER,
			encrypted: config.PUSHER.ENCRYPTED
		})
		return this;
	}

	publish(channel, event, data) {
		this.pusher.trigger(channel, event, data);
	}
}