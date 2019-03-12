/*eslint-disable*/

import axios from "axios";
import { dummyRentals } from "../utils/dummyData";

//get rentals
export const GET_RENTALS_START = "GET_RENTALS_START";
export const GET_RENTALS_SUCCESS = "GET_RENTALS_SUCCESS";
export const GET_RENTALS_ERROR = "GET_RENTALS_ERROR";

//clear selected rental
export const CLEAR_SELECTED_RENTAL = "CLEAR_SELECTED_RENTAL";

//get rental
export const GET_RENTAL_START = "GET_RENTAL_START";
export const GET_RENTAL_SUCCESS = "GET_RENTAL_SUCCESS";
export const GET_RENTAL_ERROR = "GET_RENTAL_ERROR";


export const getRentals = () => {

    return (dispatch) => {

        dispatch({
            type: GET_RENTALS_START,
        });

        setTimeout(() => {

            axios.get(`/rentals`)
            .then(res => {
                console.log(res.data);
                //success action
                let rentals = res.data.rentals;
                dispatch({
                    type: GET_RENTALS_SUCCESS,
                    rentals,
                    lastFetched: Date.now()
                })
            })
            .catch(err => {
                //error action
                dispatch({
                    type: GET_RENTALS_ERROR,
                    error: `Error while fetching rentals: ${err.message}`
                })
            })

        }, 1000)

    }
};

export const clearSelectedRental = () => {
    return {
        type: CLEAR_SELECTED_RENTAL
    }
};

export const getRental = (rentalId) => {
    return (dispatch) => {

        dispatch({
            type: GET_RENTAL_START
        });

        setTimeout(() => {
            //call to server
            //axios.get()

            axios.get(`/rentals/${rentalId}`)
            .then(res => {
                let selectedRental = res.data.rental;
                //success action
                dispatch({
                    type: GET_RENTAL_SUCCESS,
                    selectedRental
                })
            })
            .catch(err => {
                //error action
                dispatch({
                    type: GET_RENTAL_ERROR,
                    error: `Error while fetching rental: ${err.message}`
                })
            })

        }, 500)

    }
};

