import React, { memo, Suspense } from 'react';
import { Switch } from 'react-router-dom';
// import { DEFAULT_PATHS } from './config.js';
import RouteItem from './RouteItem';
// import PrivateRoute from './PrivateRoute';

const RouteIdentifier = ({ routes, fallback = <div className="loading" /> }) => (
  <Suspense fallback={fallback}>
    <Switch>
      {/* {routes.map((route, rIndex) => (route.private ? <PrivateRoute key={`r.${rIndex}`} {...route} /> : <RouteItem key={`r.${rIndex}`} {...route} />))} */}
      {routes.map((route, rIndex) => (<RouteItem key={`r.${rIndex}`} {...route} />))}
      {/* <Redirect to={notFoundPath} /> */}
    </Switch>
  </Suspense>
);

export default memo(RouteIdentifier);
