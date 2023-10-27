const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controller/message.controller");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
