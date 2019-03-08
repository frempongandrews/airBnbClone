import React from "react";


const RentalCard = ({rental}) => {
    return (

        <section key={rental.id}>
            <div className="card">
                <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="Card image cap" />
                <div className="card-body">
                    <h6 className="card-title"> {rental.category === "apartment" && !rental.shared ? "whole apartment" : "shared apartment"} - {rental.city}</h6>
                    <h6 className="card-title">{rental.description}</h6>
                    <h6 className="card-title">${rental.dailyRate} per Night - Free Cancellation</h6>
                    <a href="#" className="btn btn-primary">More info</a>
                </div>
            </div>
        </section>

    )
};

export default RentalCard;