import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default PrivateRoute;

// const PrivateRoute = ({ component: component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated ? <Comment {...props} /> : <Redirect to={Login()} />
//     }
//   />
// );

// PrivateRoute.propTypes = {
//   component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
//   isAuthenticated: PropTypes.bool
// };

// PrivateRoute.defaulProps = {
//   isAuthenticated: false
// }

// export default PrivateRoute;
