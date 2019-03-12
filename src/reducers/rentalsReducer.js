/*eslint-disable*/

//getting rental
import {
    GET_RENTAL_START,
    GET_RENTAL_SUCCESS,
    GET_RENTAL_ERROR,
    GET_RENTALS_START,
    GET_RENTALS_SUCCESS,
    GET_RENTALS_ERROR, CLEAR_SELECTED_RENTAL
} from "../actions/rentalsActions";


let initialState = {
    rentals: [
        // {
        // id: 1,
        // title: "Central Apartment",
        // city: "New York",
        // street: "Times Square",
        // category: "apartment",
        // image: "http://via.placeholder.com/350x250",
        // bedrooms: 3,
        // description: "Very nice apartment",
        // dailyRate: 34,
        // shared: false,
        // createdAt: "24/12/2017"
        // },
        // {
        //     id: 2,
        //     title: "Central Apartment 2",
        //     city: "San Francisco",
        //     street: "Main street",
        //     category: "condo",
        //     image: "http://via.placeholder.com/350x250",
        //     bedrooms: 2,
        //     description: "Very nice apartment",
        //     dailyRate: 12,
        //     shared: true,
        //     createdAt: "24/12/2017"
        // },
        // {
        //     id: 3,
        //     title: "Central Apartment 3",
        //     city: "Bratislava",
        //     street: "Hlavna",
        //     category: "condo",
        //     image: "http://via.placeholder.com/350x250",
        //     bedrooms: 2,
        //     description: "Very nice apartment",
        //     dailyRate: 334,
        //     shared: true,
        //     createdAt: "24/12/2017"
        // },
        // {
        //     id: 4,
        //     title: "Central Apartment 4",
        //     city: "Berlin",
        //     street: "Haupt strasse",
        //     category: "house",
        //     image: "http://via.placeholder.com/350x250",
        //     bedrooms: 9,
        //     description: "Very nice apartment",
        //     dailyRate: 33,
        //     shared: true,
        //     createdAt: "24/12/2017"
        // }
    ],
    isFetchingRentals: false,
    lastFetched: 0,
    isFetchingRental: false,
    selectedRental: {},
    error: ""

};

const rentalsReducer = (state=initialState, action) => {

    switch(action.type) {

        //rentals
        case GET_RENTALS_START:
            return {
                ...state,
                rentals: [],
                isFetchingRentals: true,
            };

        case GET_RENTALS_SUCCESS:
            return {
                ...state,
                rentals: action.rentals,
                isFetchingRentals: false,
                lastFetched: action.lastFetched,
                error: ""
            };

        case GET_RENTALS_ERROR:
            return {
                ...state,
                isFetchingRentals: false,
                error: action.error
            };

        //clear selected rental
        case CLEAR_SELECTED_RENTAL:
            return {
                ...state,
                selectedRental: {}
            };

        //rental
        case GET_RENTAL_START:

            return {
                ...state,
                isFetchingRental: true
            };

        case GET_RENTAL_SUCCESS:
            return {
                ...state,
                isFetchingRental: false,
                selectedRental: action.selectedRental,
                error: ""
            };

        case GET_RENTAL_ERROR:
            return {
                ...state,
                isFetchingRental: false,
                selectedRental: {},
                error: action.error
            };

        default:
            return state;
    }

};

export default rentalsReducer;