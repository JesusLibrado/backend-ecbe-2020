import express from 'express';
import bodyParser from 'body-parser';

import Environment from './configs/Env.config';

class App {
    constructor() {
        Environment.load();
    }

    public init() {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.listen(Environment.port, () => {
            console.log(`⚡️[server]: Server is running at port ${Environment.port}`);
        });
    }

    public loadDatabase() {
        console.log('loading database...');
    }
}

// eslint-disable-next-line prettier/prettier
export default new App();
