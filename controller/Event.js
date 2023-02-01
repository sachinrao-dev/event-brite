const Event = require("../modals/EventList");

const eventList = async (req, resp) => {
    // console.log("function hits", Event);
    const data = await Event.find({});
    // console.log(data, "events");
    resp.status(200).json(data);
} 
const postEvent  = async(req, resp)=>{
    const data = new Event(req.body);
    await data.save();
    resp.send("data posted success");

}

module.exports = { eventList, postEvent };