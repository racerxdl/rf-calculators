import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import {
  SeptumCalculator,
} from './Components';

const logoDivStyle = {
  position: "absolute",
  top: 0,
  left: 0
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div style={logoDivStyle}>
          <img src={logo} alt="logo" />
        </div>
        <SeptumCalculator/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
