import mongoose from '../configs/Db.config';

export const VehicleSchema: mongoose.Schema = new mongoose.Schema({
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
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema, 'vehicles');

export default Vehicle;
