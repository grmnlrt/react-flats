import React, { Component } from 'react';
import Flatslist from './flatslist';
import GoogleMap from './googlemap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Flatslist flats={this.props.flats}/>
          <GoogleMap />
        </div>
      </div>
    )
  }
}

export default App;
