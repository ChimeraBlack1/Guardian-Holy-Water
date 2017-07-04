import React, { Component } from 'react'
import Input from "./inputField"

export default class Shipping extends Component {

	constructor (props) {
		super(props);
		this.state = {
			name: "First Name",
			value: "",
		};
	}
render () {

	const backGround = {
		width: "100%",
		height: "40vh",
		position: "relative",
		textAlign: "left",
		marginBottom: "10rem",
	}

	const container = {
		position: "absolute",
		top: 0,
		left: 0,
		margin: "1rem",
		paddingLeft: "15vw",
	}

	const container2 = {
		position: "absolute",
		top: 0,
		margin: "1rem",
		right: "30vw",

	}


	const row = {
		margin: "3.5rem 0 3.5rem 0",
	}

		return (
			<div style={backGround}>

				<div style={container}>
					<div style={row}>
						<Input name="First Name" />
					</div>
					<div style={row}>
						<Input name="Last Name" />
					</div>
					<div style={row}>
						<Input name="Address line 1" />
					</div>
					<div style={row}>
						<Input name="Address line 2" />
					</div>
				</div>


				<div style={container2}>
					<div style={row}>
						<Input name="State or Province" />
					</div>
					<div style={row}>
						<Input name="City" />
					</div>
					<div style={row}>
						<Input name="Postal or Zip" />
					</div>
					<div style={row}>
						<Input name="Phone" />
					</div>
				</div>


			</div>
		);
	}
}