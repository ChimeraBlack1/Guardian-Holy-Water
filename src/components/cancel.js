import React, { Component } from 'react';


export default class CancelBtn extends Component {
    constructor(props) {
      super(props);
      this.state = {hover: false};
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
				background: "linear-gradient(to bottom, #f85032 0%,#f16f5c 0%,#f02f17 100%,#e73827 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827',GradientType=0 )", /* IE6-9 */
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

			letterStyle = {
				background: "linear-gradient(to bottom, #e73827 0%,#f02f17 0%,#f16f5c 100%,#f85032 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#e73827', endColorstr='#f85032',GradientType=0 )", /* IE6-9 */
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
			<button style={letterStyle} onMouseOver={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} onClick={this.props.onClick}>Cancel</button>
		);
	}
}