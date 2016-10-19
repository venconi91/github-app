import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router';
import styles from './styles';

import userStore from './../../stores/userStore';
import { getNavigation } from './config';

@observer
class Navigation extends Component {
  render() {
    let isUserAvailable = Object.keys(userStore.user).length > 0;
    let navigationItems = getNavigation(userStore.username);
    return <div>
        <Navbar color="faded" light className={styles.navbar} >
          {isUserAvailable ? <NavbarBrand href="/">{userStore.username}</NavbarBrand> : null}
          <Nav className="pull-xs-left" navbar>
            {navigationItems.map((item, i) => {
              return (isUserAvailable || !isUserAvailable && item.allow) ? <NavItem key={i} className={styles.menuItemWrapper}>
              <Link to={item.to} className={styles.menuItem} activeClassName={styles.activeMenuItem}>{item.title}</Link>            
            </NavItem> : null
            })}
          </Nav>
        </Navbar>
        <Container>
          {this.props.children}
        </Container>
    </div>;
  }
}

export default Navigation;