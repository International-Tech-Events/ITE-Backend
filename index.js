import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expressOasGenerator from "express-oas-generator";
import eventsRouter from "./routes/event_route.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['events'],
    mongooseModels: mongoose.modelNames(),
});

dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.static('events'));

app.use(eventsRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));


const port = process.env.PORT || 7080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

