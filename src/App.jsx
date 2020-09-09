import React from 'react';
import Key from './drum/pad.jsx'
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
  setDisplayText(char) {
    document.getElementById('display').innerHTML = SOUND_NAMES[char]
  }
  render() {
    return (
      <div id="drum-machine">
        <p id="display">

        </p>
        {Keys.map(key => <Key setDisplayText={this.setDisplayText} char={key} />)}
      </div>
    );
  }
}



export default App;
