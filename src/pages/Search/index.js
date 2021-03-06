import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Venconi91'};
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
      this.setState({value: e.target.value})
  }
  onSubmit(e) {
      e.preventDefault();
      let username = this.state.value.toLowerCase();
      this.context.router.push(`users/${username}`);
  }
  render() {
    return <div>
        <p>Search github user by username</p>
        <form onSubmit={this.onSubmit}>
            <input value={this.state.value} onChange={this.onChange} />
            <button type='submit'>Find User</button>
        </form>
    </div>;
  }
}

Home.contextTypes = {
    router: React.PropTypes.object
};

export default Home;