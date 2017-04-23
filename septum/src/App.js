import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import {
  SeptumCalculator,
  GoogleAnalytics,
} from './Components';

const logoDivStyle = {
  position: "absolute",
  top: 0,
  left: 0
};

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar title="Septum Feed Calculator" />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div className="App">
          <div style={logoDivStyle}>
            <img src={logo} alt="logo" />
          </div>
          <SeptumCalculator/>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
