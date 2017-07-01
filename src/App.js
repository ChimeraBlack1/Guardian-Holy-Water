import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/header.js';
import Water from './components/water.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn

    }));

    console.log(this.state);

    if (this.state.isToggleOn) {

    }

  }



  render() {


  	if (!this.state.isToggleOn){
  		return(
  			<div className="App">
  			<Header />
		        <button onClick={this.handleClick} className="buyNow">BUY NOW!</button>
		    </div>
  		);
  	}else {
  		 return (
		    <div className="App">
		      <Water />
		      <button onClick={this.handleClick} className="buyNow">BUY NOW!</button>
		    </div>
		 );
  	}
   
  }
}

export default App;
