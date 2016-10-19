import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card, CardImg, CardBlock, CardTitle } from 'reactstrap';

import { propTypes } from 'mobx-react';

// import UserCard from './../UserCard';
import style from './style.css';

export default class Follows extends Component {
	render() {
		let { users } = this.props;
		return (
			<Row>
                {users.map((user, i) => {
					return <Col xs="3" key={i}>	
						<Link to={`/users/${user.login}`} className={style.navigationLink}>
							<Card>
								<CardImg top width="100%" src={user.avatar_url} alt="avatar url" />
								<CardBlock className={style.titleWrapper}>
									<CardTitle>{user.login}</CardTitle>
								</CardBlock>
							</Card>
						</Link>
					</Col>;
				})}
			</Row>
		);
	}
}

Follows.propTypes = {
	users: propTypes.observableArray
}