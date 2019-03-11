/*eslint-disable*/

import React, { Component } from "react";
import "../../styles/RentalDetail.scss";
import { connect } from "react-redux";
import { getRental } from "../../actions/rentalsActions";

class RentalDetail extends Component {

    componentDidMount () {
        let rentalId = this.props.match.params.id;
        this.props.dispatch(getRental(rentalId));
    };

    render () {

        const { isFetchingRental, selectedRental } = this.props;

        console.log(this.props);
        return (

            <div id="rental-detail">

                {/*fetching rental*/}
                {
                    isFetchingRental &&
                    <p>Loading...</p>
                }
                {/* /fetching rental*/}


                {/*finished fetching rental*/}
                {
                    !isFetchingRental &&
                    <h1>Rental Detail: {selectedRental.title}</h1>
                }
                {/* /finished fetching rental*/}

            </div>

        )

    }

}

//todo: show selected rental

const mapStateToProps = (state) => {

    return {
        selectedRental: state.rentals.selectedRental,
        isFetchingRental: state.rentals.isFetchingRental
    }

};

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// };

export default connect(mapStateToProps)(RentalDetail);