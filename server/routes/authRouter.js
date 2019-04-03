const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const checkAuth = require("../utils/checkAuth");

router.post("/register", authController.registerUser);
router.post("/verify", authController.verifyUser);
router.post("/login", authController.loginUser);



module.exports = router;
