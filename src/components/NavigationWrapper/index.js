import React, { Component } from 'react';

class Wrapper extends Component {
  render() {
    return <div>
        <header>
            navigation
        </header>
        {this.props.children}
    </div>;
  }
}

export default Wrapper;