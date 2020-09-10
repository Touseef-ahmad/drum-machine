import React from 'react';
import './styles.css';
export default class Key extends React.Component {
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
        <div className="col-md-4 col-sm-4 col-4">
          <button onClick={this.play} id={`${char}-button`} class="drum-pad btn-block">
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
        </div>
      )
    }
  }