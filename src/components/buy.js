import React, { Component } from 'react';


export default class BuyBtn extends Component {
    constructor(props) {
      super(props);
      this.state = {hover: false};

     // This binding is necessary to make `this` work in the callback
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

	handleMouseOver() {
		this.setState({hover:true});
	}

	handleMouseLeave() {
		this.setState({hover: false});
	}


	render() {

		if (this.state.hover === false){
			var letterStyle = {
			    background: "#f6e6b4", /* Old browsers */
			    background: "-moz-linear-gradient(top, #f6e6b4 0%, #ed9017 100%)", /* FF3.6-15 */
			    background: "-webkit-linear-gradient(top, #f6e6b4 0%,#ed9017 100%)", /* Chrome10-25,Safari5.1-6 */
			    background: "linear-gradient(to bottom, #f6e6b4 0%,#ed9017 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
			    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e6b4', endColorstr='#ed9017',GradientType=0 )", /* IE6-9 */
				height: "3.25rem",
  				width: "15rem",
  				boxShadow: "1px 1px 25px 3px grey",
  				cursor: "pointer",
  				fontWeight: "800",
  				margin: "2.25rem  auto",
  				display: "block",
  				fontFamily: "Open Sans, sans-serif",
			}
		}else {

			var letterStyle = {
  				background: "#ed9017", /* Old browsers */
			    background: "-moz-linear-gradient(top, #ed9017 0%, #f6e6b4 100%)", /* FF3.6-15 */
			    background: "-webkit-linear-gradient(top, #ed9017 0%,#f6e6b4 100%)", /* Chrome10-25,Safari5.1-6 */
			    background: "linear-gradient(to bottom, #ed9017 0%,#f6e6b4 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
			    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ed9017', endColorstr='#f6e6b4',GradientType=0 )", /* IE6-9 */
			  	textShadow: "-2px -2px 2px grey",
				height: "3.25rem",
  				width: "15rem",
  				boxShadow: "1px 1px 25px 3px grey",
  				cursor: "pointer",
  				fontWeight: "800",
  				margin: "2.25rem  auto",
  				display: "block",
  				fontFamily: "Open Sans, sans-serif",
			  }
		}
		

		return(
			<button style={letterStyle} onMouseOver={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} onClick={this.props.onClick}>BUY NOW!</button>
		);
	}
}