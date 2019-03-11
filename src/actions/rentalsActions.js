/*eslint-disable*/

import axios from "axios";
import { dummyRentals } from "../utils/dummyData";
export const GET_RENTAL_START = "GET_RENTAL_START";
export const GET_RENTAL_SUCCESS = "GET_RENTAL_SUCCESS";
export const GET_RENTAL_ERROR = "GET_RENTAL_ERROR";


export const getRental = (rentalId) => {
    return (dispatch) => {

        dispatch({
            type: GET_RENTAL_START
        });
        let selectedRental = {};
        setTimeout(() => {
            //call to server
            //axios.get()


            //simulate call
            selectedRental = dummyRentals.filter(rental => {
                return rental.id === rentalId;
            })[0];

            console.log(selectedRental);

            dispatch({
                type: GET_RENTAL_SUCCESS,
                selectedRental
            })
        }, 1000)

    }
};

