const express = require("express");
const router = express.Router();
// const { eventList } = require("../controller/Event");
const {eventList} = require("../controller/Event");

router.route("/").get(eventList);

module.exports = router;