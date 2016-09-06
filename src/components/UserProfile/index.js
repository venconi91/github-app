import React, { Component } from 'react';
import { observer } from 'mobx-react';

export default @observer class UserProfile extends Component {
	render() {
		let {user, errorMessage} = this.props;
		return (
			<div>
				{errorMessage && <div style={{color: '#f00'}}>{error}</div>}
				{!errorMessage && <div>
					<h1>Username: {user.login}</h1>
					<p>Avatar: <img src={user.avatar_url} /></p>
					</div>
				}
			</div>
		);
	}
}
