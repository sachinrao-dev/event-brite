const Event = require("../modals/EventList");

const eventList = async (req, resp) => {
    // console.log("function hits", Event);
    const data = await Event.find({});
    // console.log(data, "events");
    resp.status(200).json(data);
} 

module.exports = { eventList };