import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Follows from './index';

describe("A suite", function() {
  it("forst test", function() {
    // expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
    const users = [{
        login: 'test',
        avatar_url: 'https://avatars.githubusercontent.com/u/7593170?v=3'
    }]
    const wrapper = shallow(<Follows users={users} />);
    expect(wrapper.find('a')).to.have.length(1);
  });
});
