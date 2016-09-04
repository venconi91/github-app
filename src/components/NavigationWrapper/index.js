import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';

import userStore from './../../stores/userStore';
import { getNavigation } from './config';

@observer
class Navigation extends Component {
  render() {
    let isUserAvailable = Object.keys(userStore.user).length > 0;
    let navigationItems = getNavigation(userStore.username);
    return <div>
        {isUserAvailable ? <Navbar color="faded" light>
          <NavbarBrand href="/">{userStore.username}</NavbarBrand>
          <Nav className="pull-xs-left" navbar>
            {navigationItems.map((item, i) => {
              return <NavItem key={i}>
              <Link to={item.to}>{item.title}</Link>            
            </NavItem>
            })}
          </Nav>
        </Navbar> : null}
        <Container>
          {this.props.children}
        </Container>
    </div>;
  }
}

export default Navigation;