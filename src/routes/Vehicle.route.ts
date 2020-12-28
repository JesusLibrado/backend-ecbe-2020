import { CommonRoutesConfig } from '../common/Route.common';
import express from 'express';

import VehicleDocument from '../models/Vehicle.model';
import { Logger } from '../utils/logger.utils';
import mongoose from '../configs/Db.config';

// import { VehicleClontroller } from '../controllers/Vehicle.controller';
export class VehicleRoutes extends CommonRoutesConfig {
    private router: express.Router;
    constructor(app: express.Application) {
        super(app, 'VehicleRouter', '/vehicle');
        this.router = express.Router();
    }

    getRouter(): express.Router {
        this.router.post('/', async (req, res, next) => {
            const session = mongoose.startSession();
            (await session).startTransaction();
            try {
                const newVehicle = await VehicleDocument.create(req.body);
                (await newVehicle).save();
                (await session).commitTransaction();
                (await session).endSession();
                res.json(newVehicle);
            } catch (err) {
                (await session).endSession();
                Logger(err, 'FRed');
                next(err);
            }
        });
        this.router.get('/', async (req, res, next) => {
            try {
                const vehicles = await VehicleDocument.find({});
                res.json(vehicles);
            } catch (err) {
                Logger(err, 'FRed');
                next(err);
            }
        });
        this.router.get('/total', async (req, res, next) => {
            const status = req.query;
            try {
                const vehicles = await VehicleDocument.find(status, 'status');
                res.json({ total: vehicles.length });
            } catch (err) {
                Logger(err, 'FRed');
                next(err);
            }
        });
        this.router.put('/:id', async (req, res, next) => {
            const session = mongoose.startSession();
            (await session).startTransaction();
            try {
                const carId = Number(req.params.id);
                const updated = await VehicleDocument.findOneAndUpdate({ carId: carId }, req.query);
                (await session).commitTransaction();
                (await session).endSession();
                res.json(updated);
            } catch (err) {
                (await session).endSession();
                Logger(err, 'FRed');
                next(err);
            }
        });
        return this.router;
    }
}
