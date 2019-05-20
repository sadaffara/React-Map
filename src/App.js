import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import 'antd/dist/antd.css';

//basic style for map
const mapStyles = {
  width: '80%',
  height: '80%',
  margin: '0 auto'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props)
    //array of markers for showing different points on map
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
          {/* mapping into markers array to show it on the map */}
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
//Google API Key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB64ikAN6mHSffolpM-fhfngsSIkNfkiGk'
})(MapContainer);
