import React, { Component } from "react";
import "../../styles/RentalList.scss";
import RentalCard from "./RentalCard";
import { connect } from "react-redux";


class RentalList extends Component {

    render () {
        console.log(this.props);

        const rentalItems = this.props.rentals.map(rental => {
           return (
               <RentalCard rental={rental} key={rental.id}/>
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

const mapStateToProps = (state) => {
  return {
      rentals:state.rentals.rentals
  }
};

export default connect(mapStateToProps) (RentalList);