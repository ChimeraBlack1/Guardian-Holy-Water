import React, { Component } from 'react';

export default class Input extends Component {

	constructor (props) {
		super(props);
		this.state = {
			name: this.props.name,
			value: "",
			active: false,
		};
	}

	handleFocus (e) {
		this.setState({active: true});
	}

	handleChange (e) {
		this.setState({value: e.target.value});
	}

	handleBlur () {

		if(this.state.value === "") {
			this.setState({
				active: false,
			});
		}
	}



	render() {

		var inputStyle = {
			borderTop: "0",
			borderRight: "0",
			borderLeft: "0",
			borderBottom: "2px solid #ccc",
			textAlign: "left",
			fontFamily: "Open Sans, sans-serif",
  			margin: "0",
  			display: "block",
  			outline: "0",
  			width: "20vw",
  			height: "2rem",
  			minWidth: "100px",
		}

		const labelStyle = {
			position: "absolute",
			top: "0",
			left: "0",
		}

		

		const formStyle = {
			display: "inline-block",
			position: "relative",
		}


		if (this.state.active === true) {

			var spanStyle = {
				position: "absolute",
				textAlign: "left",
				top: "-3rem",
				left: "0",
				zIndex: "1",
				width: "10rem",
				transition: "top 200ms",
				color: "blue",

			}

			inputStyle = {

				borderTop: "0",
				borderRight: "0",
				borderLeft: "0",
				borderBottom: "2px solid blue",
				textAlign: "left",
				fontFamily: "Open Sans, sans-serif",
	  			margin: "0",
	  			display: "block",
	  			outline: "0",
	  			width: "20vw",
	  			height: "2rem",
  				minWidth: "100px",

			}

		} else {
			spanStyle = {
				position: "absolute",
				textAlign: "left",
				top: "0",
				left: "0",
				zIndex: "1",
				width: "10rem",
				color: "#333",
				transition: "top 500ms",
			}
		}


		return (
				<div style={formStyle}>
					<label style={labelStyle}>
						<span style={spanStyle}>{this.state.name}</span>
						<input style={inputStyle} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} name={this.props.name} onChange={this.handleChange.bind(this)} value={this.state.value} type="text" />
					</label>
				</div>
		);
	}
}