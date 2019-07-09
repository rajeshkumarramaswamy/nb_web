import React, { Component } from 'react'
import firebase from './components/Firebase/firebase'
import Navigation from './components/CommonComponents/Navigation';
import { getFirebase } from 'react-redux-firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false }
  }

  render() { 
    return ( 
      <>
      <Navigation />
      </> );
  }
}
 
export default App;