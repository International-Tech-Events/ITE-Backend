import {EventsModel} from "../models/event_model.js"

// Get Events
export const getEvents = async (req, res, next) => {
    try {
        // Get Query Params
        let { page = 1 } = req.query;
        const limit = 5;
        const skip = (page - 1) * limit;
        const filter = "{}";
        const sort = "{}";
        const fields = "{}";

        // Get All Categories From database
        const getEvent = await EventsModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip)
            .sort(JSON.parse(sort));

        // Return response
        res.status(200).json(getEvent);
    } catch (error) {
        next(error);
    }
};

// Add Events
export const postEvents = async (req, res) => {
    try{
        console.log(req.body)
        const postEvents = await EventsModel.create({
            ...req.body,
            flierUrl: req.file.filename
        })
        res.status(200).send(postEvents);

    } catch (error) {
    console.log(error)}
};

// Get Event By ID
export const getEventById = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await EventsModel.findById(eventId);
        res.status(200).send(event);
    } catch (error) {
        console.log(error)
    }
};

// Update Events
export const patchEvents = async (req, res) => {
    // const { price } = req.body; 
    // console.log("updateEvent", price);

    try {
        const updateEvent = await EventsModel.findByIdAndUpdate(
            req.params.id, 
            {...req.body, image:req?.file?.filename}, 
            { new: true } 
        );

        res.status(200).send(updateEvent);
    } catch (error) {
        console.log(error);
    }
};

// Delete Events
export const deleteEvents = async (req, res) => {
    try{
        const deletedEvent = await EventsModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedEvent)
    } catch (error) {
        console.log(error)

    }
};


