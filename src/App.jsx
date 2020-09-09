import React from 'react';
import logo from './logo.svg';
import './App.css';

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

class Key extends React.Component {
  constructor(props){
    super(props);
    this.play = this.play.bind(this);
  }
  play(){
    const x = document.getElementById(this.props.char);
    x.play();
    this.props.setDisplayText(this.props.char)
  }
  render(){
    const char = this.props.char;
    return(
      <button onClick={this.play} id={`${char}-button`} class="drum-pad">
        <p>
        {char}
      </p>
        <audio class="clip" id={char}
        controls
        src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/34[kb]brightclap.aif.mp3">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
      </button>
    )
  }
}

export default App;
