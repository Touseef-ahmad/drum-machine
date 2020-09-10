import React from 'react';
import Key from './drum/pad.jsx';
import './App.css';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import { SOUND_NAMES } from './sounds';
const Keys =
  ["Q", "W", "E",
    "A", "S", "D",
    "Z", "X", "C"]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(event) {
    const char = String.fromCharCode(event.keyCode)

    // if key pressed is one of the 9 keys
    if (Keys.includes(char)) {
      document.getElementById(`${char}-button`).click()
    }
    // else do nothing
  }

  // display name of the sound being played on paragraph (p) with id display
  setDisplayText(char) {
    document.getElementById('display').innerHTML = SOUND_NAMES[char]
  }
  render() {
    return (
      <div className="row center" id="drum-machine">
        <div className="col-12 col-sm-12 col-md-12 ">
        <div className="row">
        <div className="col-9 col-sm-9 col-md-9">
          <div className="row">
            <Key setDisplayText={this.setDisplayText} char="Q" />
            <Key setDisplayText={this.setDisplayText} char="W" />
            <Key setDisplayText={this.setDisplayText} char="E" />
          </div>
          <div className="row">
            <Key setDisplayText={this.setDisplayText} char="A" />
            <Key setDisplayText={this.setDisplayText} char="S" />
            <Key setDisplayText={this.setDisplayText} char="D" />
          </div>
          <div className="row">
            <Key setDisplayText={this.setDisplayText} char="Z" />
            <Key setDisplayText={this.setDisplayText} char="X" />
            <Key setDisplayText={this.setDisplayText} char="C" />
          </div>
        </div>
        <div className="col-3 col-md-3 col-sm-3 align-self-center">
          <p id="display">Press a key</p>
        </div>
      </div>
        </div>
      </div>
    );
  }
}



export default App;
