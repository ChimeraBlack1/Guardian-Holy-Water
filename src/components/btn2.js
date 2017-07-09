import React, { Component } from 'react'
import { Button } from 'react-toolbox/lib/button/Button' 


export default class Btn2 extends Component {
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

		return(
			<Button label="Ahhhhh yeeeah boiz" raised />
		);
	}
}