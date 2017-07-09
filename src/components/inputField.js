import React, { Component } from 'react'


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
			borderRight: "1px solid #eee",
			borderLeft: "0",
			borderBottom: "2px solid #555",
			textAlign: "left",
			fontFamily: "Open Sans, sans-serif",
  			margin: "0",
  			display: "block",
  			outline: "0",
  			width: "100%",
  			height: "2rem",
  			minWidth: "100px",
		}

		const labelStyle = {
			margin: "4rem 0",
			position: "relative",
			top: "0",
			left: "0",
		}

		

		const formStyle = {
			display: "block",
			position: "relative",
		}


		if (this.state.active === true) {

			var spanStyle = {
				position: "absolute",
				textAlign: "left",
				top: "0",
				left: "0",
				zIndex: "1",
				width: "15rem",
				color: "#555",
				fontSize: "1.35rem",
				fontWeight: "bold",
				transition: "transform 300ms ease, fontSize 1200ms",
				transform: "translateY(-3rem)",

			}

			inputStyle = {

				borderTop: "0",
				borderRight: "1px solid #bbb",
				borderLeft: "0",
				borderBottom: "2px solid #333",
				textAlign: "left",
				fontFamily: "Open Sans, sans-serif",
	  			display: "block",
	  			outline: "0",
	  			width: "100%",
	  			height: "2rem",
  				minWidth: "100px",
  				boxShadow: "2px 2px 20px 25px #eee inset"
  				

			}

		} else {
			spanStyle = {
				position: "absolute",
				textAlign: "left",
				top: "0",
				left: "0",
				zIndex: "1",
				width: "100%",
				color: "#666",
				transition: "transform 300ms ease, fontSize 1200ms",
				transform: "translateY(0)",
				
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