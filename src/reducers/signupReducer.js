import { SIGNUP_USER_START, SIGNUP_USER_SUCCESS, SIGNUP_USER_ERROR } from "../actions/authActions/signupActions";

let initialState = {
  registeredUser: "",
  successMessage: "",
  isRegistering: false,
  errors: {
      email: "",
      password: ""
  }
};

const signupReducer = (state=initialState, action) => {

    let newState;

    switch(action.type) {

        case SIGNUP_USER_START:
           newState = {
               ...initialState,
               isRegistering: true,
           };
           return newState;

        case SIGNUP_USER_SUCCESS:
            newState = {
                ...initialState,
                isRegistering: false,
                registeredUser: action.payload.user,
                successMessage: action.payload.message
            };
            return newState;

        case SIGNUP_USER_ERROR:
            // console.log(action);
            newState = {
                ...initialState,
                registeredUser: "",
                successMessage: "",
                isRegistering: false,
                errors: {
                    email: action.errors.email || "",
                    password: action.errors.password || ""
                }
            };
            return newState;

        default:
            return state;
    }

};

export default signupReducer;