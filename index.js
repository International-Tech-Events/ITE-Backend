import express from "express";
import eventsRouter from "./routes/event_route.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

const app = express();


app.use(express.json());



dbConnection();

app.use(eventsRouter);


app.listen(7060, () => {
    console.log('App listening on port 7080');
});

