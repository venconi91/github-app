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
        
		return (
			<div>
                <h1>Username: {userStore.user.login}</h1>
                <p>Avatar: <img src={userStore.user.avatar_url} /></p>
			</div>
		);
	}
}
