import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.markerLat !== this.props.markerLat
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.markerLat}
            lng={this.props.markerLng}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap;
