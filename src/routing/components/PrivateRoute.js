// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import TokenService from 'services/TokenService';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = TokenService.getRefreshTokenValidity();
//   return <Route {...rest} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />;
// };

// export default PrivateRoute;
