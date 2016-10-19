import React from 'react';
import style from './style';

function App({ children }) {
  return <div className={style.bodyBackground}>
    {children}
  </div>;
}

App.propTypes = {
  children: React.PropTypes.any
}

export default App;