import React from 'react';
import { Pad } from './pad';
import { SOUND_NAMES } from './sounds';
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

class DrumView extends React.Component {
  state = {
    displayText: 'Press a key',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick = char => {
    const soundName = SOUND_NAMES[char];
    this.setState({ displayText: soundName });
    document.getElementById(char).play();
  };

  handleKeyPress = event => {
    const char = String.fromCharCode(event.keyCode);
    const buttonId = `${char}-button`;
    // if key pressed is one of the 9 keys
    if (Keys.includes(char)) {
      document.getElementById(buttonId).click();
    }
    // else do nothing
  };

  render() {
    const { displayText } = this.state;
    return (
      <div className='row center' id='drum-machine'>
        <div className='col-12 col-sm-12 col-md-12 '>
          <div className='row'>
            <div className='col-9 col-sm-9 col-md-9'>
              <div className='row'>
                <Pad handleClick={this.handleClick} char='Q' />
                <Pad handleClick={this.handleClick} char='W' />
                <Pad handleClick={this.handleClick} char='E' />
              </div>
              <div className='row'>
                <Pad handleClick={this.handleClick} char='A' />
                <Pad handleClick={this.handleClick} char='S' />
                <Pad handleClick={this.handleClick} char='D' />
              </div>
              <div className='row'>
                <Pad handleClick={this.handleClick} char='Z' />
                <Pad handleClick={this.handleClick} char='X' />
                <Pad handleClick={this.handleClick} char='C' />
              </div>
            </div>
            <div className='col-3 col-md-3 col-sm-3 align-self-center'>
              <p id='display'>{displayText}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { DrumView };
