import React from 'react';
import './App.css';
import PreLanding from './components/pre-landing/pre-landing'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <PreLanding />
      </div>
    );
  }

  componentDidMount(){
    let t =this;
    setTimeout(()=>{
      t.props.history.push("/landing");
  },2050)
  }
}

export default App;
