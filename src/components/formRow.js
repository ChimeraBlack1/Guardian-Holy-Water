import React, { Component } from 'react'
import Input from "./inputField"
import MediaQuery from 'react-responsive'

export default class FormRow extends Component {



	render() {

		const desktop = {
			margin: "5rem 0",
		}

		const phone = {
			margin: "5rem 0",
		}

		const tablet = {
			margin: "5rem 0",
		}

		const giant = {
			margin: "5rem 0",
		}

		const tiny = {
			margin: "5rem 0",
		}

		return(
			<div>
				<MediaQuery query="(max-width: 575px)">
					<div style={tiny}>
						<Input name="Address line 2" />
					</div>
				</MediaQuery>

				<MediaQuery query='(min-width: 576px) and (max-width: 767px)'>
					<div style={phone}>
						<Input name="Address line 2" />
					</div>
				</MediaQuery>
				<MediaQuery query='(min-width: 768px) and (max-width: 991px)'>
					<div style={tablet}>
						<Input name="Address line 2" />
					</div>
				</MediaQuery>
				<MediaQuery query='(min-width: 992px) and (max-width: 1199px)'>
					<div style={desktop}>
						<Input name="Address line 2" />
					</div>
				</MediaQuery>
				<MediaQuery query='(min-width: 1200px)'>
					<div style={giant}>
						<Input name="Address line 2" />
					</div>
				</MediaQuery>
			</div>
		);
	}
}