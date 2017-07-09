import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { Row }from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Input from './inputField.js'

export default class FormRow extends Component {

	constructor(props) {
		super(props);
		this.state = {state: "none"};
	}

	render() {
		return(
			<Grid>
			    <Row className="show-grid">
			    	<Col xs={12} sm={6}>
			     		<Input name="First Name" />
			     	</Col>
					<Col xs={12} sm={6}>
			     		<Input name="Last Name" />
			     	</Col>
			    </Row>

			    <Row className="show-grid">
			    	<Col xs={12} sm={6}>
			     		<Input name="Street Address" />
			     	</Col>
					<Col xs={12} sm={6}>
			     		<Input name="Phone Number" />
			     	</Col>
			    </Row>

				<Row className="show-grid">
			    	<Col xs={12} sm={6}>
			     		<Input name="City" />
			     	</Col>
					<Col xs={12} sm={6}>
			     		<Input name="Province" />
			     	</Col>
			    </Row>

			 </Grid>
		);
	}
}


