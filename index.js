const server = require('./server');
const routes = require('./routes/routes');

class App {
    constructor() {
        this.load();
    }

    load() {
        let expressApp = new server();
        expressApp.startApp();

        let appRoutes = new routes(expressApp.app);
    }
}

new App();