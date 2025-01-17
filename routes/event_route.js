import { Router } from "express";
import { postEvents, getEvents, patchEvents, getEventById, deleteEvents } from "../controllers/event_controller.js"
import { remoteUpload } from "../middlewares/uploads.js"

// Create Router
const eventRouter = Router();

// Define Routes
eventRouter.post('/events', remoteUpload.single('flier'), postEvents);

eventRouter.get('/events', getEvents);

eventRouter.patch('/events/:id', remoteUpload.single('flier'), patchEvents);

eventRouter.get('/events/:id', getEventById);

eventRouter.delete('/events/:id', deleteEvents);



export default eventRouter;
