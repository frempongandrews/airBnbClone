import React, { Component } from "react";
import "../styles/RentalList.scss";
import RentalCard from "./RentalCard";

class RentalList extends Component {

    state = {
      rentals: [1,2,3,4, 5]
    };

    render () {

        const rentalItems = this.state.rentals.map(rental => {
           return (
               <RentalCard />
           )
        });

        return (

            <div id="rental-list">
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='container'>


                        {rentalItems}




                </div>
            </div>

        )

    }

}

export default RentalList;