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


app.use(express.json());
app.use(express.static('uploads'));



dbConnection();

app.use(cors());
app.use(eventsRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));



app.listen(7080, () => {
    console.log('App listening on port 7080');
});

