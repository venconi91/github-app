import React from 'react';

function App({ children }) {
  return <div>{children}</div>;
}

App.propTypes = {
  children: React.PropTypes.any
}

export default App;