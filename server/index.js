import express, { json } from "express"
import cors from "cors"
import { connect } from "mongoose"
import { config } from "dotenv";

import Routes from "./routes/route.js"
// const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 5000

config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(json({ limit: '10mb' }))
app.use(cors());

connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})