import {EventsModel} from "../models/event_model.js"

export const getEvents = async (req, res, next) => {
try{
    console.log('request', req.body)
    const getEvent = await EventsModel.find()
    res.status(200).send(getEvent);

} catch (error) {
    console.log(error)

}
}

export const postEvents = async (req, res, next) => {
    try{
        console.log(req.body)
        const postEvents = await EventsModel.create({
            ...req.body,
            image: req.file.filename
        })
        res.status(200).send(postEvents);

    } catch (error) {
    console.log(error)}
}

export const getEventById = async (req, res) => {
    try{
        const EventId = req.params.id;
        const getEventId = await EventsModel.findById(req.params.id)
        res.status(200).send(getEventId);

} catch (error) {
        console.log(error)

    }
}

export const patchEvents = async (req,res) => {
    try {
        const updateEvent = await EventsModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(updateEvent);

    } catch (error) {
        console.log(error)

    }
}

export const deleteEvents = async (req, res) => {
    try{
        const deletedEvent = await EventsModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedEvent)
    } catch (error) {
        console.log(error)

    }
}



