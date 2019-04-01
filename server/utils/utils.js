const jwt = require("jsonwebtoken");
const secret = require("../config/config").secret;

const authMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;

    if (token) {
        let userId = await parseToken(token);

        //if wrong token or userId undefined
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Not authorized"
            })
        }

        req.userId = userId;
        next();
        return;
    }

    return res.status(401).json({
        success: false,
        message: "Not authorized"
    })

};

const parseToken = (token) => {

    try {
        //have saved user id in the payload
        let decoded = jwt.verify(token, secret);
        return decoded;
    } catch (err) {
        console.log("Invalid token");
    }
};

module.exports = {
    authMiddleware
};