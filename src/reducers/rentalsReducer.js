/*eslint-disable*/

//getting rental
import { GET_RENTAL_START, GET_RENTAL_SUCCESS, GET_RENTAL_ERROR } from "../actions/rentalsActions";


let initialState = {
    rentals: [
        {
        id: 1,
        title: "Central Apartment",
        city: "New York",
        street: "Times Square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
        },
        {
            id: 2,
            title: "Central Apartment 2",
            city: "San Francisco",
            street: "Main street",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 2,
            description: "Very nice apartment",
            dailyRate: 12,
            shared: true,
            createdAt: "24/12/2017"
        },
        {
            id: 3,
            title: "Central Apartment 3",
            city: "Bratislava",
            street: "Hlavna",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 2,
            description: "Very nice apartment",
            dailyRate: 334,
            shared: true,
            createdAt: "24/12/2017"
        },
        {
            id: 4,
            title: "Central Apartment 4",
            city: "Berlin",
            street: "Haupt strasse",
            category: "house",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 9,
            description: "Very nice apartment",
            dailyRate: 33,
            shared: true,
            createdAt: "24/12/2017"
        }
    ],
    isFetchingRental: false,
    selectedRental: {},

};

const rentalsReducer = (state=initialState, action) => {

    switch(action.type) {
        case GET_RENTAL_START:

            return {
                ...state,
                isFetchingRental: true
            };

        case GET_RENTAL_SUCCESS:
            return {
                ...state,
                isFetchingRental: false,
                selectedRental: action.selectedRental
            };

        default:
            return state;
    }

};

export default rentalsReducer;