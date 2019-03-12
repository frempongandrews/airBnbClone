const Rental = require("../models/Rental");
const mongoose = require("mongoose");

const rentalsController = {

    getRentals: (req, res) => {

        Rental.find({})
        .then(rentals => {
            res.json({
                success: true,
                rentals
            })
        })
        .catch(err => {
            res.json({
                success: false,
                error: `${err.message}`
            })
        })

    },

    getRentalById: (req, res) => {
        console.log(req.params.id);
        let id = mongoose.Types.ObjectId(req.params.id);
        Rental.findById(id)
        .then(rental => {

            if (rental !== null) {
                res.json({
                    success: true,
                    rental
                });
                return;
            }

            res.json({
                success: false,
                error: "rental not found"
            })

        })
        .catch(err => {
            res.json({
                success: false,
                error: `${err.message}`
            })
        })
    },
};

module.exports = rentalsController;