import React, { Component } from 'react';
import logo from './sticker.png';
import './App.css';
import Story from "./Story.js"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { start: false };
  }
  handleClick() {
    this.setState({
      ...this.state,
      start: !this.state.start
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        {this.state.start == false ?
            <div>
              <h1 className="App-title">Welcome to a Series of Unfortunate Events</h1>
              <h1 className="App-title">HackTCNJ Edition</h1>
              <button onClick={() => this.handleClick()}>Begin Your Journey . . .</button>
            </div>
            :
            <Story />
          }
      </div>

    );
  }
}

export default App;
