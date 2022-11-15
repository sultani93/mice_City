import React, { Component } from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
const mapwrapper = {
  width: '100%',
  height: '200px',
  overflow: 'hidden',
}
const center = {
  lat: 40.4093,
  lng: 49.8671,
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        style={mapwrapper}
        class='mapView'
        google={this.props.google}
        zoom={10}
        center={{ lat: 40.4093, lng: 49.8671 }}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: center.lat, lng: center.lng }}
        />
        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBce5GGOjUkR7Xfk_iTOQzLPE4RWpQ9yes',
})(MapContainer)
