const User = require("../models/User");
const mailSettings = require("../config/config").dreamhostEmailSettings;
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = nodemailer.createTransport(mailSettings);
const config = require("../config/config");

const authController = {

    registerUser: (req, res, next) => {

        //email
        //password

        //console.log(req.body);


        let { email, password, confirmPassword } = req.body;
        //console.log(email.trim().includes("@"));

        email = email.trim();
        password = password.trim();
        confirmPassword = confirmPassword.trim();

        let errors = {

        };

        if (!email) {

            //check if there is already an email error
            if (!errors.email) {
                errors["email"] = "Email is required"
            }
        }

        if ((email.includes("@"))) {


            let atIndex = email.indexOf("@");

            console.log(email.slice(atIndex));

            //check letters before @ symbol
            if (atIndex === 0 || email.slice(0, atIndex).length < 1 ) {
                //check if there is already an email error
                if (!errors.email) {
                    errors["email"] = "Email is required"
                }
            }

            //check letters after @ symbol
            if (email.slice(atIndex + 1).length < 1) {

                //check if there is already an email error
                if (!errors.email) {
                    errors["email"] = "Email is required"
                }
            }

        }

        if (!password) {
            //check if there is already a password error
            if (!errors.password) {
                errors["password"] = "Password is required";
            }
        }

        if (password.length < 4) {

            //check if there is already a password error
            if (!errors.password) {
                errors["password"] = "Password must be at least 4 characters";
            }
        }

        if (!confirmPassword) {

            //check if there is already a password error
            if (!errors.confirmPassword) {
                errors["confirmPassword"] = "Please confirm password";
            }
        }

        if (password !== confirmPassword) {

            //check if there is already a password error
            if (!errors.password && !errors.confirmPassword) {
                errors["password"] = "Passwords do not match";
                errors["confirmPassword"] = "Passwords do not match";;
            }
        }

        //check if any errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                success: false,
                errors
            })
        }

        let newUser = new User({
            email,
            password
        });

        //check if username exists
        User.findOne({email})
        .then(user => {
            if (user !== null) {
                return res.status(400).json({
                    success: false,
                    errors: {
                        email: "Email already registered"
                    },

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
                    <a href="http://localhost:3000/verify">Verify your email here</a></p>`
            }, async (err, info) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        success: false,
                        errors: {
                            email: "Error occurred. Please check if email is valid"
                        },
                    });

                }

                //if success sending email, save user
                console.log(info);
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                newUser.password = hash;
                await newUser.save();

                res.json({
                    success: true,
                    message: `${email} has successfully registered`,
                    user: {
                        email
                    }
                })

            });

        })
        .catch(err => {
            //console.warn(err);
            next(err);
        });
    },

    verifyUser: (req, res, next) => {

        console.log(req.body);
        //email address
        //verificationCode

        const { email, verificationCode } = req.body;

        if (!email) {
           return res.status(400).json({
               success: false,
               errors: {
                   email: "Email is required"
               }
           })
        }

        if (!verificationCode) {
            return res.status(400).json({
                success: false,
                errors: {
                    verificationCode: "Verification code is required"
                }
            })
        }

        User.findOne({email})
            .then( async (foundUser) => {

                if (foundUser === null) {
                    return res.status(400).json({
                        success: false,
                        errors: {
                            email: "No user found"
                        }
                    })
                }


                //check verificationCode
                if (foundUser.verificationCode === verificationCode.trim()) {

                    foundUser.verificationCode = "";
                    foundUser.isVerified = true;

                    await foundUser.save();

                    res.json({
                        success: true,
                        message: `${email} has successfully been verified. You can now login`
                    })
                } else {
                    res.status(400).json({
                        success: false,
                        email: `Wrong email or verification code`
                    })
                }

            })
            .catch(err => {
                //console.warn(err);
                next(err);
            })

    },

    loginUser: (req, res, next) =>{

        //once login send token to client

        const { email, password } = req.body;

        console.log(req.body);

        if (!email) {
            return res.status(400).json({
                success: false,
                errors: {
                    email: "Email is required"
                }
            })
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                errors: {
                    password: "Password is required"
                }
            })
        }

        User.findOne({email})
        .then(foundUser => {
            if (foundUser === null) {
                return res.status(400).json({
                   success: false,
                   errors: {
                       email: "No user found"
                   }
                });
            }

            //console.log(foundUser.hasSamePassword(password));

            let samePassword = bcrypt.compareSync(password, foundUser.password);
            console.log(samePassword);

            if (!samePassword) {
                return res.status(400).json({
                    success: false,
                    errors: {
                        email: "Wrong email or password"
                    }
                })
            }

            //if passwords match
            if (samePassword) {
                if (foundUser.isVerified && foundUser.verificationCode === "") {

                    let userPayload = foundUser.showDetails();

                    let token = jwt.sign(userPayload, config.secret, {expiresIn: "20h"});

                    return res.json({
                        success: true,
                        message: "You have successfully logged in",
                        user: email,
                        token
                    });

                }
            }
        })
        .catch(err => {
            next(err);
        })


    }
};




module.exports = authController;