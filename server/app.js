const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 9000;
const config = require("./config/config.js");
const dbUrl = config.dbUrl;
const FakeDb = require("./fakeDb/FakeDb");



//routes
const rentalsRouter = require("./routes/rentalsRouter");
const authRouter = require("./routes/authRouter");

//mongo connection
mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true })
    .then(async () => {
        console.log(`Successfully CONNECTED to mongo`);

        //populate Db with fake data for now
        let fakeDb = new FakeDb();

        // await fakeDb.clearDb();
        // fakeDb.fillDb();

    })
    .catch(err => {
        console.log(`FAILED to CONNECT to mongo: ${err.message}`);
    });

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//routes
app.use("/rentals", rentalsRouter);
app.use("/auth", authRouter);


//error handler
app.use((err, req, res, next) => {

    res.status(400).json({
        success: false,
        error: err
    });
    next();
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});