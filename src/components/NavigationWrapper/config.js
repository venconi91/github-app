export function getNavigation(username) { 
    return [{
      to: '/',
      title: 'Search',
      allow: true // if true shows this navigation item when no user is available
    }, {
      to: `/users/${username}`,
      title: 'Home'
    }, {
      to: `/users/${username}/followers`,
      title: 'Followers'
    }, {
      to: `/users/${username}/followings`,
      title: 'Followings'
    }, {
      to: `/users/${username}/repos`,
      title: 'Repos'
    }];
}