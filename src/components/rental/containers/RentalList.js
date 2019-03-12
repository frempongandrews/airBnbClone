import React, { Component } from "react";
import "../../../styles/RentalList.scss";
import RentalCard from "../RentalCard";
import { connect } from "react-redux";
import { getRentals, clearSelectedRental } from "../../../actions/rentalsActions";

class RentalList extends Component {

    componentDidMount () {


        this.props.clearSelectedRental();

        if (this.props.lastFetched === 0) {
            console.log("************lastFetched is 0");
            this.props.getRentals();
        }

        //fetch every 1 minute
        if (this.props.lastFetched > 0) {
            console.log("************lastFetched is > 0");
            if (Date.now() > this.props.lastFetched + 60000) {
                console.log("True");
                this.props.getRentals();
            }
        }


    }

    render () {
        console.log(this.props);

        const { isFetchingRentals } = this.props;

        const rentalItems = this.props.rentals.map(rental => {
           return (
               <RentalCard rental={rental} key={rental._id}/>
           )
        });

        return (

            <div id="rental-list">

                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='container'>

                    {
                        isFetchingRentals &&
                        <p>Loading...</p>
                    }

                    {rentalItems}

                </div>
            </div>

        )

    }

}

const mapStateToProps = (state) => {
  return {
      rentals:state.rentals.rentals,
      isFetchingRentals: state.rentals.isFetchingRentals,
      lastFetched: state.rentals.lastFetched
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      getRentals: () => {
          dispatch(getRentals());
      },
      clearSelectedRental: () => {
          dispatch(clearSelectedRental());
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (RentalList);