import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { Row, Col, Card, CardImg, CardBlock, CardTitle } from 'reactstrap';

import UserCard from './../UserCard';

export default class Follows extends Component {
	render() {
		let { users } = this.props;
		return (
			<Row>
                {users.map((user, i) => {
					return <Col xs="3" key={i}>	
						<Card>
							<CardImg top width="100%" src={user.avatar_url} alt="avatar url" />
							<CardBlock>
								<CardTitle>{user.login}</CardTitle>
							</CardBlock>
						</Card>
					</Col>;
				})}
			</Row>
		);
	}
}