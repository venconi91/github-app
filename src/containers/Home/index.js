import React, { Component} from 'react';
import { observer, inject } from 'mobx-react';
import UserProfile from './../../components/UserProfile';

// TODO: refactor inject
const DashBoard = inject('userStore')(observer(({ userStore }) => {
  return <div>
        <UserProfile />
    </div>;
}))

export default DashBoard;