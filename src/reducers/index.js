import { combineReducers } from "redux";
import rentalsReducer from "./rentalsReducer";
import signupReducer from "./signupReducer";

const allReducers = combineReducers({
    rentals: rentalsReducer,
    signup: signupReducer
});

export default allReducers;