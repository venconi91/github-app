import React, { Component } from 'react';
import { Link } from 'react-router'; 
import { Row } from 'reactstrap';

export default class Repos extends Component {
	render() {
		let { data } = this.props;
		return (
			<a href={data.html_url} target='_blank'>
				<Row>
					{data.name}
				</Row>
			</a>
		);
	}
}