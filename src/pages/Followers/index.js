import React, { Component } from 'react';
import { fetchFollowers } from './../../api/user';

class Followers extends React.Component {
  componentWillMount() {
    let username = this.props.params.username;
    fetchFollowers(username);
  }
  render() {
    return <div>
        followers page
    </div>;
  }
}

export default Followers;