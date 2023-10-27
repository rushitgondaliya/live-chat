const express = require("express");
const {
  accessChat,
  fetchChats,
} = require("../controller/chat.controller");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
module.exports = router;
