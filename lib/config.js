module.exports = () => {
	const env = process.env.NODE_ENV || 'local';
	let config = null;
	try {
		config = require(`../env/${env}`);
	} catch (e) {
		console.log(`error while loading config file ${e}`);
	}
	config.environment = env;
	return config;
}