import React from 'react';
import Key from './drum/pad.jsx'

const Keys = ["Q" , "W" , "E",
                "A" , "S" , "D",
                "Z" , "X" , "C"] 
const SOUND_NAMES = {
  Q : "Heater-1",
  W : "Kick_n_Hat",
  E : "Chord_1",
  A : "Heater-6",
  S : "punchy_kick_1", 
  D : "Brk_Snr",
  Z : "Dry_Ohh",
  X : "Heater-3",
  C : "Dsc_Oh"
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
   componentDidMount() {
   document.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(event){
      const char = String.fromCharCode(event.keyCode)
      
      // if key pressed is one of the 9 keys
      if(Keys.includes(char)){
        document.getElementById(`${char}-button`).click()
      }
      // else do nothing
  }
  setDisplayText(char){
    document.getElementById('display').innerHTML = SOUND_NAMES[char]
  }
  render() {
    return (
      <div id="drum-machine">
        <p id="display">
            
        </p>
        {Keys.map(key => <Key setDisplayText={this.setDisplayText} char={key}/>)}
      </div>
    );
  }
}



export default App;
