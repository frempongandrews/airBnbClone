//auth middleware

const checkAuth = (req, res, next) => {

    try {
        let token = req.headers.Authorization.split(" ");
        console.log(token);
    } catch( err) {

    }

};

module.exports = checkAuth;