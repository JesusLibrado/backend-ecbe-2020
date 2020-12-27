import { CommonRoutesConfig } from '../common/Route.common';
import express from 'express';

import VehicleDocument from '../models/Vehicle.model';
import Vehicle from '../models/Vehicle.model';

// import { VehicleClontroller } from '../controllers/Vehicle.controller';
export class VehicleRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'VehicleRouter');
    }
    configureRoutes(): express.Application {
        this.app.route('/vehicles').get(async (req, res, next) => {
            const vehicles = await VehicleDocument.find({});
            res.json(vehicles);
        });
        return this.app;
    }
}
