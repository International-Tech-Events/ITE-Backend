import { Router } from "express";
import { postEvents, getEvents, patchEvents, getEventById, deleteEvents } from "../controllers/event_controller.js"

const eventRouter = Router();

eventRouter.post('/events', postEvents);

eventRouter.get('/events', getEvents);

eventRouter.patch('/events/:id', patchEvents);

eventRouter.get('/events/:id', getEventById);

eventRouter.delete('/events/:id', deleteEvents);



export default eventRouter;
