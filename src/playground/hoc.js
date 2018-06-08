//higher Order Component (HOC) - A component that renders another component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWaring = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share </p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAuthenticated ? <p>Please login</p> : <WrappedComponent {...props} />}
    </div>
  )
}

// const AdminInfo = withAdminWaring(Info);
const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAuthenticated={true} info="There you are" />, document.getElementById('app'));