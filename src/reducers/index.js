import { combineReducers } from "redux";
import rentalsReducer from "./rentalsReducer";

const allReducers = combineReducers({
    rentals: rentalsReducer
});

export default allReducers;