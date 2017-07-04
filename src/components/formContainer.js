import React, { Component } from 'react'
import Input from "./inputField"
import FormRow from './formRow'
import MediaQuery from 'react-responsive'

export default class formContainer extends Component {
	render() {
		return(
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
		);
	}
}