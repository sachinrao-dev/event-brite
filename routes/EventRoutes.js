const express = require("express");
const router = express.Router();
// const { eventList } = require("../controller/Event");
const {eventList, postEvent} = require("../controller/Event");

router.route("/").get(eventList);
router.route("/").post(postEvent)
module.exports = router;