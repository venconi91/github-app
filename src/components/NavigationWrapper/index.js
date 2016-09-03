import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

import userStore from './../../stores/userStore';

@observer
class Wrapper extends Component {
  render() {
    let isUserAvailable = Object.keys(userStore.user).length > 0;
    return <div>
        {isUserAvailable ? <Navbar color="faded" light>
          <Nav className="pull-xs-left" navbar>
            <NavItem>
              <Link to="/">Home</Link>
              <Link to={`/users/${userStore.username}/followers`}>Followers</Link>
              <Link to={`/users/${userStore.username}/followings`}>Followings</Link>
            </NavItem>
          </Nav>
        </Navbar> : null}
        {this.props.children}
    </div>;
  }
}

export default Wrapper;