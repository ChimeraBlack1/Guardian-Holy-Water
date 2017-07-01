import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/header.js';
import Water from './components/water.js'
import Tos from './components/tos.js';

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

  }


  render() {


  	if (!this.state.isToggleOn){
  		return(
  			<div className="App">
  			<Header />
  			<Tos />
  				<button onClick={this.handleBuy} className="btn buyNow">Buy Anyway!</button>
		        <button onClick={this.handleClick} className="btn thanks">Oh...No thanks!</button>
		    </div>
  		);
  	}else {
  		 return (
		    <div className="App">
		      <Header />
		      <Water />
		      <button onClick={this.handleClick} className="btn buyNow">BUY NOW!</button>
		    </div>
		 );
  	}
   
  }
}

export default App;
