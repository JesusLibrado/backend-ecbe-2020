import mongoose from '../configs/Db.config';

export const VehicleSchema: mongoose.Schema = new mongoose.Schema(
    {
        carId: {
            type: Number,
            required: true,
            unique: true,
        },
        model: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        kilometres: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['REGISTERED', 'AT_SERVICE', 'READY', 'DELIVERED'],
            default: 'REGISTERED',
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    },
);

const Vehicle = mongoose.model('Vehicle', VehicleSchema, 'vehicles');

export default Vehicle;
