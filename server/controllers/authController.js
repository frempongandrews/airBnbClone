const User = require("../models/User");
const mailSettings = require("../config/config").dreamhostEmailSettings;
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(mailSettings);

const authController = {

    registerUser: (req, res) => {


        console.log(req.body);

        let { email, password } = req.body;

        let newUser = new User({
            email,
            password
        });

        //check if username exists
        User.findOne({email})
        .then(user => {
            if (user !== null) {
                return res.json({
                    error: "Email already registered",
                    type: "email"
                })
            }

            let verificationCode = randomstring.generate({
                readable: true,
                length: 9,
                charset: "alphabetic"
            });
            newUser.verificationCode = verificationCode;

            //send mail
            //if fails, do not save user
            transporter.sendMail({
                from: mailSettings.auth.user,
                to: `${email}`,
                subject: "AirBnBClone Registration",
                text: `Thanks for registering. Press on following link to verify your email. 
                    http://localhost:9000/auth/verify`,
                html: `<p>Thanks for registering. Press on following link to verify your email. 
                    <a href="http://localhost:9000/verify">Verify your email here</a></p>`
            }, (err, info) => {
                if (err) {
                    console.log(err);
                    return res.status(422).json({
                        error: "Error occurred. Please check if email is valid",
                        type: "email"
                    });
                }

                //if success sending email, save user
                console.log(info);

                newUser.save()
                .then(newUser => {
                    console.log(`newly registered user ${newUser}`);
                })
                .catch(err => console.warn(err));

            });

        })
        .catch(err => {
            console.warn(err);
        });
    },

    loginUser: (req, res) =>{
        res.send("login");
    }
};




module.exports = authController;