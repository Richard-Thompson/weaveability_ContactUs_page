import React, {Component} from 'react';

import '../css/Map.css';

class Map extends Component {
  render () {
    return (
        <div id="map" className="is-hidden-mobile is-hidden-tablet-only">
            <img src="images/map-holder.png" />
        </div>
        
    );
  }
}

export default Map;