import express from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
import compression from "compression";
import rateLimit from "express-rate-limit";

import "./utils/connectDB.js"
// import { connect } from "mongoose"
// import { config } from "dotenv";

import Routes from "./routes/route.js"
// const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 5000 ;
dotenv.config();

// Rate Limiter
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minute rate limit
    max: 1000, 
    delayMs: 0,
    message: 'Too many Requests, Try again later.',
    headers : true
  });

app.use(cors('*'));
app.use(logger('dev'));
app.use(express.json());
app.use(compression());
app.use(limiter)

app.use('/', Routes);

app.use((req, res, next) => {
    res.status(404).send("404 - Not Found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("500 - Internal Server Error");
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})