import React from 'react';
import './App.css';
import PreLanding from './components/pre-landing/pre-landing'
import AudioPlayer from "react-h5-audio-player";
import sound from './asset/Keyboard-typing.mp3'

import ThankYou from './components/thank-you/thank-you'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        {/* <ThankYou /> */}
        <PreLanding />
        <AudioPlayer
          autoPlay={true}
          src={sound}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      </div>
    );
  }

  componentDidMount(){
    let t =this;
    setTimeout(()=>{
      t.props.history.push("/landing");
    },5000)
    }
}

export default App;
