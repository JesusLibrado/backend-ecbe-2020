import { CommonRoutesConfig } from '../common/Route.common';
import express from 'express';

export class VehicleRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'VehicleRouter');
    }
    configureRoutes(): express.Application {
        this.app.route('/vehicles').get((req, res, next) => {
            res.send('SUCCESS');
        });
        return this.app;
    }
}
