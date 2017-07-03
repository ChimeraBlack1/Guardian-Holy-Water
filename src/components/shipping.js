import React, { Component } from 'react';

export default class Shipping extends Component {
	render() {

		const inputStyles = {
			position: "absolute",
			right: "11rem",
		}

		// const ulStyles = {

		// }

		return(
			<form>
				<ul>
					<li>
						<label for="first">First Name*</label>
						<input style={inputStyles} name="first" type="text" />
					</li>
					<li>
						<label for="last">Last Name*</label>
						<input style={inputStyles} name="last" type="text" />
					</li>
					<li>
						<label for="add1">Address Line 1*</label>
						<input style={inputStyles} name="add1" type="text" />
					</li>
					<li>
						<label for="add2">Address Line 2 (Optional)</label>
						<input style={inputStyles} name="add2" type="text" />
					</li>
					<li>
						<label for="prov">State or Province</label>
						<input style={inputStyles} name="prov" type="text" />
					</li>
					<li>
						<label for="postal">Zip or Postal</label>
						<input style={inputStyles} name="postal" type="text" />
					</li>
					<li>
						<label for="city">City</label>
						<input style={inputStyles} name="city" type="text" />
					</li>
					<li>
						<label for="phone">Phone</label>
						<input style={inputStyles} name="phone" type="text" />
					</li>
				</ul>
			</form>
		);
	}
}