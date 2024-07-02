import {EventsModel} from ".../models/event_model.js"

export const getEvents = async (req, res, next) => {
try{
    console.log('request', req.body)
    const getData = await EventsModel.find()
    res.json(getData);

} catch (error) {
    console.log(error)

}
}

export const postEvents = async (req, res, next) => {
    try{
        console.log(req.body)
        const postData = await EventsModel.find()
        res.json(getData);

    } catch (error) {
    console.log(error)}
}

export const patchEvents = async (req,res) => {
    try {
        const status = req.body;
        console.log('request', req.body)
        const updateDataId = await EventsModel.findByIdAndUpdate(req.params.id,{});
        res.json(updateDataId);

    } catch (error) {
        console.log(error)

    }
}

export const deleteEvents = async (req, res) => {
    try{
        const deletedEvent = await EventsModel.findByIdAndDelete(req.params.id,{});
        res.json(deleteddataId)
    } catch (error) {
        console.log(error)

    }
}



