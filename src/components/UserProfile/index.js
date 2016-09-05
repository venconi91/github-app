import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

// @observer
// class UserProfile extends Component {
//   render() {
//     // const { me, tracks, activeTrack, clientId, onAuth, onPlay } = this.props;
//     return (
//       <div>
//         component profile
//       </div>
//     );
//   }
// }

// export default UserProfile;


// TODO: refactor to render data from props 
import userStore from './../../stores/userStore';

export default @observer class UserProfile extends Component {
	render() {
        let error = userStore.errorMessage;
		let user = userStore.user;
		return (
			<div>
				{error && <div style={{color: '#f00'}}>{error}</div>}
				{!error && <div>
					<h1>Username: {user.login}</h1>
					<p>Avatar: <img src={user.avatar_url} /></p>
					</div>
				}
			</div>
		);
	}
}
