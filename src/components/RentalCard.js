import React from "react";

const RentalCard = () => {
    return (

        <section>
            <div className="card" style={{maxWidth: "18rem", minWidth: "10rem"}}>
                <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="Card image cap" />
                <div className="card-body">
                    <h6 className="card-title">whole apartment - new york</h6>
                    <h6 className="card-title">Some nice apartment</h6>
                    <h6 className="card-title">$240 per Night - Free Cancellation</h6>
                    <a href="#" className="btn btn-primary">More info</a>
                </div>
            </div>
        </section>

    )
};

export default RentalCard;