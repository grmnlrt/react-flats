import React, { Component } from 'react';
import Flatslist from './flatslist';
import GoogleMap from './googlemap';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapMarkerLat: null,
      mapMarkerLng: null
    }
  }

  updateMarker = (lat, lng) => {
    // console.log(lat, lng);
    this.setState({
      mapMarkerLat: lat,
      mapMarkerLng: lng
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <Flatslist flats={this.props.flats} updateMarker={this.updateMarker}/>
          <GoogleMap zoom={11} center={{lat: 48.8534, lng: 2.3488}} markerLat={this.state.mapMarkerLat} markerLng={this.state.mapMarkerLng}/>
        </div>
      </div>
    )
  }
}

export default App;
