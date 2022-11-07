import React, { Component } from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
const mapwrapper = {
  width: '100%',
  height: '50vh',
}
export class MapContainer extends Component {
  render() {
    return (
      <Map
        style={mapwrapper}
        class='mapView'
        google={this.props.google}
        zoom={14}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBce5GGOjUkR7Xfk_iTOQzLPE4RWpQ9yes',
})(MapContainer)
