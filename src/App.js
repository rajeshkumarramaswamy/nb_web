import React, { Component } from 'react'
import Navigation from './components/CommonComponents/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false }
  }

  render() { 
    return ( 
      <>
      <Navigation />
      </> 
    );
  }
}
 
export default App;