import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';

export class MapContainer extends React.Component{
  render() {

  const triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];

    // initialCenter={{ lat: 40.6948745, lng: -73.9418488 }} 
    return (
      <Map 
        google={this.props.google} 
        // zoom={14}         
        initialCenter={{
            lat: 42.39,
            lng: -72.52
        }}
        >  
  <Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDWiqpSDkyC_yVGhT5cFyu9kjaR7Y2fMD0')
})(MapContainer)