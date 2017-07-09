import React, { Component } from 'react';
import img from '../img/hw_bottle.png';


export default class HolyWater extends Component {

	render() {

		var holyWaterStyle = {
		  background: "url(" + img + ") no-repeat center center",
		  height: "500px",
		  width: "50%",
		  minWidth: "240px",
	  	  display: "inline-block",
		}

		return(
			<div style={holyWaterStyle}></div>
		);
	}
}