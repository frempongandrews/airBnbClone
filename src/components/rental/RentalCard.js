/*eslint-disable*/

import React from "react";
import { Link } from "react-router-dom";

const RentalCard = ({rental}) => {
    return (


            <section>
                <div className="card">
                    <img className="card-img-top" src={`${rental.image}`} alt="Card image cap" />
                    <div className="card-body">
                        <h6 className="card-title"> {rental.shared ? "shared " : "whole "} {rental.category}- {rental.city}</h6>
                        <h6 className="card-title">{rental.title.slice(0, 20)} {rental.title.length > 20 && '...'}</h6>
                        <h6 className="card-title">${rental.dailyRate} per Night - Free Cancellation</h6>
                        <Link to={`/rentals/${rental._id}`} className="btn btn-primary">More info</Link>
                    </div>
                </div>
            </section>


    )
};

export default RentalCard;