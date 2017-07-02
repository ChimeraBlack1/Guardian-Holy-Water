import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/header.js';
import Water from './components/water.js'
import Tos from './components/tos.js';
import CancelBtn from './components/cancel.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick() {
    this.setState({page: 2});

  }

   handleBuy () {
    this.setState({page: 3, isToggleOn: false});
	console.log(this.state);
  }



  render() {


  	if (this.state.page === 1){
  		return (
		    <div className="App">
		      <Header />
		      <Water />
		      <button onClick={this.handleClick} className="btn buyNow">BUY NOW!</button>
		    </div>
  		);
  	}else if(this.state.page === 2) {
  		 return (
		    <div className="App">
	  			<Header />
	  			<Tos />
	  				<button onClick={this.handleBuy.bind(this)} className="btn buyNow">Buy Anyway!</button>
			        <button onClick={this.handleClick.bind(this)} className="btn thanks">Oh...No thanks!</button>
		    </div>
		 );
  	} else if(this.state.page === 3){
  		return(
  			<div className="App">
  			<Header />
  				<CancelBtn />
  				<button onClick={this.handleBuy.bind(this)} className="btn buyNow">Buy Anyway!</button>
		    </div>
  		);
  	}
   
  }
}

export default App;
