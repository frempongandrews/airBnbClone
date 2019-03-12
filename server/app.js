const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9000;
const config = require("./config/config.js");
const dbUrl = config.dbUrl;
const FakeDb = require("./fakeDb/FakeDb");


//routes
const rentalsRouter = require("./routes/rentalsRouter");

//mongo connection
mongoose.connect(dbUrl, { useNewUrlParser: true })
    .then(() => {
        console.log(`Successfully CONNECTED to mongo`);

        //populate Db with fake data for now
        let fakeDb = new FakeDb();
        fakeDb.clearDb();
        fakeDb.fillDb();

    })
    .catch(err => {
        console.log(`FAILED to CONNECT to mongo: ${err.message}`);
    });



app.use("/rentals", rentalsRouter);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});