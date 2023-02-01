const { json } = require("express");
require("dotenv").config();
const express = require("express");
const app = express();
const EventRouter = require("./routes/EventRoutes");
const mongooseDB = require("./db/Connection");

const port = process.env.PORT || 7000;
mongooseDB(process.env.MONGOOSE_URL);
app.get("/", (req,resp)=>{
resp.send("server is live");
})

app.use(json());
app.use("/event", EventRouter);

app.listen(port, ()=>{
    console.log(`${port} is live`);
});