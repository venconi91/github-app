import React from 'react';
import { Link } from 'react-router';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Follows from './index';
import followersStore from './../../stores/followersStore';

const users = [{
    login: 'test',
    avatar_url: 'https://avatars.githubusercontent.com/u/7593170?v=3'
}]

describe("Follow component", function() {
  it("should contain link to some user page", function() {
    followersStore.setFollowers(users);
    const wrapper = mount(<Follows users={followersStore.followers} />);
    expect(wrapper.find(Link).props().to).to.equal('/users/test');
  });
});
