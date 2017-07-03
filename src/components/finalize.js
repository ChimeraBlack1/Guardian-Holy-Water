import React, { Component } from 'react';


export default class Finalize extends Component {
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
				background: "linear-gradient(to bottom, #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 )", /* IE6-9 */
				height: "4.25rem",
  				width: "18rem",
  				boxShadow: "1px 1px 25px 3px grey",
  				cursor: "pointer",
  				fontWeight: "800",
  				margin: "2.25rem  auto",
  				display: "block",
  				fontFamily: "Open Sans, sans-serif",
				borderRadius: "25px",
			}

		}else {

			letterStyle = {
				background: "linear-gradient(to bottom, #002400 0%,#005700 17%,#008a00 33%,#52b152 67%,#83c783 83%,#b4ddb4 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
				filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#002400', endColorstr='#b4ddb4',GradientType=0 )", /* IE6-9 */
				textShadow: "-2px -2px 2px grey",
				height: "4.25rem",
  				width: "18rem",
  				boxShadow: "1px 1px 25px 3px grey",
  				cursor: "pointer",
  				fontWeight: "800",
  				margin: "2.25rem  auto",
  				display: "block",
  				fontFamily: "Open Sans, sans-serif",
  				borderRadius: "25px",
			  }
		}
		

		return(
			<button style={letterStyle} onMouseOver={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} onClick={this.props.onClick}>Finalize Purchase</button>
		);
	}
}