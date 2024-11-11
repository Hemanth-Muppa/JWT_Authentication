const express = require('express')
const router = express.Router();
const User = require("../Models/User");

const { login, signup } = require("../Controller/Auth");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;