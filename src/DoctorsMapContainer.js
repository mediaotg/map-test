
import React from "react";
import DoctorsMap from "./DoctorsMap";

export default class DoctorsMapContainer extends React.Component {

    render() {
        return (
            <DoctorsMap
                doctors={this.props.doctors}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDWiqpSDkyC_yVGhT5cFyu9kjaR7Y2fMD0&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `600px`, width: `600px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}