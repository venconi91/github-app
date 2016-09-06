import React from 'react';
import { observer, inject } from 'mobx-react';

import UserProfile from './../../components/UserProfile';

const DashBoard = inject('userStore')(observer(({ userStore }) => {
    return <div>
        <UserProfile user={userStore.user} errorMessage={userStore.errorMessage} />
    </div>
}))

export default DashBoard;