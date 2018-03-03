const Pusher = require('pusher');

module.exports = class PusherApp {
	constructor() {
		this.pusher = new Pusher({
			appId: '485857',
			key: '6cef7582399e400f200f',
			secret: 'acff13832fc541d965b4',
			cluster: 'ap2',
			encrypted: true
		})
		return this;
	}

	publish(channel, event, data) {
		this.pusher.trigger(channel, event, data);
	}
}