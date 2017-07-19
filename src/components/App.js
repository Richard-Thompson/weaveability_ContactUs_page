import React, {Component} from 'react';

import TopNav from './TopNav';
import BottomNav from './BottomNav';

class App extends Component {
  render () {
    return (
      <div>
      <TopNav />
      <BottomNav />
      </div>
    );
  }
}
export default App;