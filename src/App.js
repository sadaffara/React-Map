import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markers : [
        {
          lat: 30,
          lng: 51
        },
        {
          lat: 34,
          lng: 51
        },
        {
          lat: 32,
          lng: 49
        },
        {
          lat: 32,
          lng: 51
        },
      ]
    }
  }


  render() {
    return (                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      // map
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 32.2884,
         lng: 51.8233
        }}
        >

          {
            this.state.markers.map((marker, index) => {
              return(
                <Marker key={index} position={{ lat: marker.lat , lng: marker.lng }} />
              )

            })
          }

        </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB64ikAN6mHSffolpM-fhfngsSIkNfkiGk'
})(MapContainer);
