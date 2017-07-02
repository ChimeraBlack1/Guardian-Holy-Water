import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/header.js';
import Water from './components/water.js'
import Tos from './components/tos.js';
import CancelBtn from './components/cancel.js';
import BuyBtn from './components/buy.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};

    // This binding is necessary to make `this` work in the callback
    this.page2 = this.page2.bind(this);
  }

   page2 () {
    this.setState({page: 2});

  }

   page3 () {
    this.setState({page: 3, isToggleOn: false});
  }



  render() {


  	if (this.state.page === 1){
  		return (
		    <div className="App">
		      <Header />
		      <Water />
          <BuyBtn onClick={this.page2.bind(this)} />
		    </div>
  		);
  	}else if(this.state.page === 2) {
  		 return (
		    <div className="App">
	  			<Header />
	  			<Tos />
	  				<button onClick={this.page3.bind(this)} className="btn buyNow">Buy Anyway!</button>
			        <button onClick={this.page2.bind(this)} className="btn thanks">Oh...No thanks!</button>
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
