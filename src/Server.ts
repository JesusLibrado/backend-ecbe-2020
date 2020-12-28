import express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import { Logger } from './utils/logger.utils';
import morganLogger from './configs/Logger.config';
import Environment from './configs/Env.config';
import { Database } from './configs/Db.config';
import { CommonRoutesConfig } from './common/Route.common';
import { VehicleRoutes } from './routes/Vehicle.route';

class Server {
    private app: express.Application;
    private server: http.Server;
    private routes: CommonRoutesConfig[] = [];
    private database: Database;

    constructor() {
        this.database = new Database();
        this.app = express();
        this.server = http.createServer(this.app);
    }

    public setup() {
        Environment.load();
    }

    public start() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morganLogger());
        this.routes.push(new VehicleRoutes(this.app));

        this.app.listen(Environment.port, () => {
            Logger(`⚡️[server]: running at port ${Environment.port}`, 'FWhite');
        });
    }

    public connectDb() {
        this.database.connect();
        this.database.connection.on('error', (err) => {
            throw new Error("Couldn't connect to database");
        });
        this.database.connection.on('open', () => {
            Logger('Connected to dabatase', 'FBlue');
        });
    }
}

export default new Server();
