import React, { Component } from 'react';
import Flat from './flat';

class Flatslist extends Component {
  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map( flat => {
          return <Flat flat={flat} key={flat.name} updateMarker={this.props.updateMarker}/>
        })}
      </div>
    )
  }
}

export default Flatslist;
