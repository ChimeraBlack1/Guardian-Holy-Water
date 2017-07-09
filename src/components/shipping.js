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
			    	<Col sm={2}></Col>
			    	<Col xs={12} sm={4}>
			     		<Input name="First Name" />
			     	</Col>
					<Col xs={12} sm={4}>
			     		<Input name="Last Name" />
			     	</Col>
			     	<Col sm={2}></Col>
			    </Row>

			    <Row className="show-grid">
			    	<Col sm={2}></Col>
			    	<Col xs={12} sm={4}>
			     		<Input name="Street Address" />
			     	</Col>
					<Col xs={12} sm={4}>
			     		<Input name="Phone Number" />
			     	</Col>
			     	<Col sm={2}></Col>
			    </Row>

				<Row className="show-grid">
					<Col sm={2}></Col>
			    	<Col xs={12} sm={4}>
			     		<Input name="City" />
			     	</Col>
					<Col xs={12} sm={4}>
			     		<Input name="Province" />
			     	</Col>
			     	<Col sm={2}></Col>
			    </Row>

			 </Grid>
		);
	}
}


