import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventsSchema = new Schema({

name: {type: String, unique:true, required: true},

date: {type: Date, required: true},

description: {type: String},

facilitator: {type: String},

price: {type: Number},

location: {type: String},

flierUrl: {type: String}


}, {
    timestamps: true 
});

export const EventsModel = model('event', eventsSchema);

eventsSchema.plugin(toJSON);