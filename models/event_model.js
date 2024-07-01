import { Schema, model } from "mongoose";

const eventsSchema = new Schema({
name: {type, String},

});

export const EventsModel = model('event', eventsSchema);