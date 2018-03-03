# pusher-handson

Simple comment posting app with Pusher and Node.js

## Quick start
### Step 1:  Set up the Development Environment
This project is intended to be used with v8.9.3 release of [Node.js][nodejs] or newer and [NPM][npm]. Make sure you have those installed.

You need to create config file inside env folder. If you env is local then,

env >> local.json

Add, following format in your json file
{
	"PORT": 8888,
	"PUSHER": {
		"APP_ID": "pusher app id",
		"KEY": "pusher app key",
		"SECRET": "pusher secret",
		"CLUSTER": "pusher cluseter",
		"ENCRYPTED": true
	}
}

Also, change the key in app.js inside public folder.

Then just type following commands:

```sh
npm install
npm start
```