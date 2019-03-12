const express = require("express");
const router = express.Router();
const rentalsController = require("../controllers/rentalsController");

//get rentals
router.get("/", rentalsController.getRentals);

//get rental by id
router.get("/:id", rentalsController.getRentalById);




module.exports = router;