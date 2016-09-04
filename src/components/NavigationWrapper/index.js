import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

import userStore from './../../stores/userStore';

@observer
class Wrapper extends Component {
  render() {
    let isUserAvailable = Object.keys(userStore.user).length > 0;
    return <div>
        {isUserAvailable ? <Navbar color="faded" light>
          <NavbarBrand href="/">{userStore.username}</NavbarBrand>
          <Nav className="pull-xs-left" navbar>
            <NavItem>
              <Link to="/">Home</Link>            
            </NavItem>
            <NavItem>
              <Link to={`/users/${userStore.username}/followers`}>Followers</Link>
            </NavItem>
            <NavItem>
              <Link to={`/users/${userStore.username}/followings`}>Followings</Link>
            </NavItem>
            <NavItem>
              <Link to={`/users/${userStore.username}/repos`}>Repos</Link>
            </NavItem>
          </Nav>
        </Navbar> : null}
        <Container>
          {this.props.children}
        </Container>
    </div>;
  }
}

export default Wrapper;