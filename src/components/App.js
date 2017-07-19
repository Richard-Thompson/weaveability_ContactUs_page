import React, {Component} from 'react';

import TopNav from './TopNav';
import BottomNav from './BottomNav';
import TopBanner from './TopBanner';
import Map from './Map';

class App extends Component {
  render () {
    return (
      <div>
      <TopNav />
      <BottomNav />
      <TopBanner />
      <Map />
      </div>
    );
  }
}
export default App;