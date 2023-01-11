import {Schema, model} from "mongoose";

const objectSchema = new Schema({
    category: {type: String, required: true},
    price: {type: String}, // TODO: change to number
    location: {type: String},
    rooms: {type: Number},
    want: {type: String},
    status: {type: Boolean},
    model: {type: String},
    square: {type: Number},
})

export default model('Object', objectSchema);