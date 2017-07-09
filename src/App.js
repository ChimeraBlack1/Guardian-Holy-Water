import React, { Component } from 'react'
import './normalize.css'
import styles from './App.css'
import Header from './components/header'
import Water from './components/water'
import Tos from './components/tos'
import CancelBtn from './components/cancel'
import BuyBtn from './components/buy'
import Shipping from './components/shipping'
import ConfirmAddy from './components/confirmAddy'
import ChangeAddy from './components/changeAddy'
import OrderSuccess from './components/success'
import BuyMore from './components/buyMore'
import Finalize from './components/finalize'
import Total from './components/total/total'
import HolyWater from './components/holyWater'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

   page1 ()  {
    this.setState({
      page: 1,
    });

    console.log(this.state);
  }

   page2 () {
    this.setState({
      page: 2,
    });
    console.log(this.state);
  }

   page3 () {
    this.setState({
      page: 3,
    });

    console.log(this.state);
  }

  page4() {
    this.setState({
      page: 4,
    });

    console.log(this.state);
  }

  page5() {
    this.setState({
      page: 5,
    });

    console.log(this.state);
  }




  render() {

  	if (this.state.page === 1){
  		return (
		    <div className={styles.App}>
		      <Header />
		      <Water />
          <BuyBtn onClick={this.page2.bind(this)} />
		    </div>
  		);
  	}else if(this.state.page === 2) {
  		 return (
		    <div className={styles.App}>
	  			<Tos />
          <BuyBtn onClick= {this.page3.bind(this)} />
          <CancelBtn onClick= {this.page1.bind(this)}/>
		    </div>
		 );
  	} else if(this.state.page === 3){
  		return(
  			<div className={styles.App}>
          <HolyWater />
          <Total />
          <Shipping />
          <ConfirmAddy onClick={this.page4.bind(this)} />
  				<CancelBtn onClick={this.page1.bind(this)} />
		    </div>
  		);
  	} else if (this.state.page === 4) {
      return (
        <div className={styles.App}>
          <HolyWater />
          <Total />
          <Finalize onClick={this.page5.bind(this)} />
          <ChangeAddy onClick={this.page3.bind(this)}/>
          <CancelBtn onClick={this.page1.bind(this)} />
        </div>
        
      );
    } else if (this.state.page === 5) {
      return (
        <div className={styles.App}>
          <HolyWater />
          <Total />
          <OrderSuccess />          
          <BuyMore onClick={this.page3.bind(this)} />
        </div>

      );
    }
   
  }
}
