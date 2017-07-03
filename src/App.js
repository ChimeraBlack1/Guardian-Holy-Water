import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Header from './components/header.js';
import Water from './components/water.js'
import Tos from './components/tos.js';
import CancelBtn from './components/cancel.js';
import BuyBtn from './components/buy.js';
import Order from './components/order.js';
import Shipping from './components/shipping.js';
import ConfirmAddy from './components/confirmAddy.js';
import ChangeAddy from './components/changeAddy.js';
import OrderSuccess from './components/success.js';
import BuyMore from './components/buyMore';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};

  }

   page1 ()  {
    this.setState({page: 1});
  }

   page2 () {
    this.setState({page: 2});
  }

   page3 () {
    this.setState({page: 3, isToggleOn: false});
  }

  page4() {
    this.setState({page: 4, isToggleOn: false});
  }

  page5() {
    this.setState({page: 5, isToggleOn: false});
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
	  			<Tos />
          <BuyBtn onClick= {this.page3.bind(this)} />
          <CancelBtn onClick= {this.page1.bind(this)}/>
		    </div>
		 );
  	} else if(this.state.page === 3){
  		return(
  			<div className="App">
          <Order />
          <Shipping />
          <ConfirmAddy onClick={this.page4.bind(this)} />
  				<CancelBtn onClick={this.page1.bind(this)} />
		    </div>
  		);
  	} else if (this.state.page === 4) {
      return (
        <div className="App">
          <Order />
          <BuyBtn onClick={this.page5.bind(this)} />
          <ChangeAddy onClick={this.page3.bind(this)}/>
          <CancelBtn onClick={this.page1.bind(this)} />
        </div>
        
      );
    } else if (this.state.page === 5) {
      return (
        <div className="App">
          <OrderSuccess />
          <BuyMore onClick={this.page3.bind(this)} />
        </div>

      );
    }
   
  }
}
