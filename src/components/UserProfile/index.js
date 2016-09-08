import React, { Component } from 'react';
import { observer, propTypes } from 'mobx-react';

@observer
export default class UserProfile extends Component {
	render() {
		let {user, errorMessage} = this.props;
		return (
			<div>
				{errorMessage && <div style={{color: '#f00'}}>{errorMessage}</div>}
				{!errorMessage && <div>
					<h1>Username: {user.login}</h1>
					<p>Avatar: <img src={user.avatar_url} /></p>
					</div>
				}
			</div>
		);
	}
}

UserProfile.propTypes = {
	user: propTypes.observableObject,
	errorMessage: React.PropTypes.string
}
