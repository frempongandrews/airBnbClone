/*eslint-disable*/

import React, { Component } from "react";
import "../../styles/RentalDetail.scss";
import { connect } from "react-redux";
import { getRental } from "../../actions/rentalsActions";

class RentalDetail extends Component {

     componentDidMount () {
        let rentalId = this.props.match.params.id;
        this.props.getRental(rentalId);

        this.renderMap();
    };

    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 41.890251, lng: 12.492373},
            zoom: 8
        });
        // The marker, positioned at Uluru
        // var marker = new window.google.maps.Marker({position: uluru, map: map});

    };

    renderMap = () => {

        loadScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGQFOv8Dnc8uY7-RGMAf3P4AZk6rBbZes&callback=initMap");
        window.initMap = this.initMap;
    };

    render () {

        const { isFetchingRental, selectedRental } = this.props;

        console.log(this.props);
        return (

            <div className="container-fluid">

                {/*fetching rental*/}
                {
                    isFetchingRental &&
                    <p>Loading...</p>
                }
                {/* /fetching rental*/}


                {/*/!*finished fetching rental*!/*/}
                {/*{*/}
                    {/*!isFetchingRental &&*/}
                    {/*<h1>Rental Detail: {selectedRental.title}</h1>*/}
                {/*}*/}
                {/*/!* /finished fetching rental*!/*/}


                <section id='rentalDetails'>
                    <div className='upper-section'>
                        <div className='row'>
                            <div className='col-md-6 rental-image-container'>
                                <img src={selectedRental.image} alt='' />
                            </div>
                            <div className='col-md-6'>


                                <div id="map">

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='details-section'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='rental'>
                                    <h2 className={`rental-type ${selectedRental.category}`}>{selectedRental.shared} {selectedRental.category}</h2>
                                    <h1 className='rental-title'>{selectedRental.title}</h1>
                                    <h2 className='rental-city'>{selectedRental.city}</h2>
                                    <div className='rental-room-info'>
                                        <span><i className='fa fa-building'></i>{selectedRental.bedrooms} bedrooms</span>
                                        <span><i className='fa fa-user'></i> {selectedRental.bedrooms + 4} guests</span>
                                        <span><i className='fa fa-bed'></i> {selectedRental.bedrooms + 2} beds</span>
                                    </div>
                                    <p className='rental-description'>
                                        {selectedRental.description}
                                    </p>
                                    <hr></hr>
                                    <div className='rental-assets'>
                                        <h3 className='title'>Assets</h3>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <span><i className='fa fa-asterisk'></i> Cooling</span>
                                                <span><i className='fa fa-thermometer'></i> Heating</span>
                                                <span><i className='fa fa-location-arrow'></i> Iron</span>
                                            </div>
                                            <div className='col-md-6'>
                                                <span><i className='fa fa-desktop'></i> Working area</span>
                                                <span><i className='fa fa-cube'></i> Washing machine</span>
                                                <span><i className='fa fa-cube'></i> Dishwasher</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'> BOOKING</div>
                        </div>
                    </div>
                </section>


            </div>

        )

    }

}

//function for google map

function loadScript (url) {
    const firstScriptTag = window.document.getElementsByTagName("script")[0];

    //creating script for map

    {/*<script async defer*/}
    {/*src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGQFOv8Dnc8uY7-RGMAf3P4AZk6rBbZes&callback=initMap">*/}
    {/*</script>*/}

    let script = window.document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = url;

    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);

}


const mapStateToProps = (state) => {

    return {
        selectedRental: state.rentals.selectedRental,
        isFetchingRental: state.rentals.isFetchingRental
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        getRental: (rentalId) => {
            dispatch(getRental(rentalId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalDetail);