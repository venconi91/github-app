export function getNavigation(username) { 
    return [{
      to: '/',
      title: 'Search'
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