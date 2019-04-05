const axios = require("axios");
export const SIGNUP_USER_START = "SIGNUP_USER_START";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_ERROR = "SIGNUP_USER_ERROR";

const startUserSignup = () => {
    return {
        type: SIGNUP_USER_START
    }
};

export const signupUser = (userData) => {
     return (dispatch) => {

         //start signup process
         dispatch (startUserSignup());

         //send request to server after x seconds
         setTimeout( () => {

               axios.post("/auth/register", userData)
                   .then(res => {
                     console.log(res.data);
                     //dispatch action here
                       dispatch({
                         type: SIGNUP_USER_SUCCESS,
                         payload: {
                             user: res.data.user.email,
                             message: res.data.message
                         }
                     });

                   })
                 .catch(err => {
                     console.log(err.response);
                     if (err.response) {

                         if (err.response.status === 400) {
                             dispatch({
                                 type: SIGNUP_USER_ERROR,
                                 errors: {
                                     email: err.response.data.errors.email || "",
                                     password: err.response.data.errors.password || "",
                                     confirmPassword: err.response.data.errors.confirmPassword || ""
                                 }
                             })
                         }

                     }
                 })

         }, 3000);

    }

};