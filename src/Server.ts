import express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';

import Environment from './configs/Env.config';
import Database from './configs/Db.config';
import { CommonRoutesConfig } from './common/Route.common';
import { VehicleRoutes } from './routes/Vehicle.route';

class Server {
    private app: express.Application;
    private server: http.Server;
    private routes: CommonRoutesConfig[] = [];

    constructor() {
        Environment.load();
        this.app = express();
        this.server = http.createServer();
    }

    public start() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.routes.push(new VehicleRoutes(this.app));

        this.app.listen(Environment.port, () => {
            console.log(`⚡️[server]: Server is running at port ${Environment.port}`);
        });
    }

    public connectDb() {
        Database.connect();
    }
}

// eslint-disable-next-line prettier/prettier
export default new Server();
