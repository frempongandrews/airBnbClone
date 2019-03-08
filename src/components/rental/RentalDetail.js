import React, { Component } from "react";
import "../../styles/RentalDetail.scss";


class RentalDetail extends Component {

    render () {

        return (

            <div id="rental-detail">
                <h1>Rental Detail {this.props.match.params.id}</h1>
            </div>

        )

    }

}

export default RentalDetail;