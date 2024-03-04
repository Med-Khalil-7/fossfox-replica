import React, { useMemo } from 'react';



// import routing modules
import RouteIdentifier from './routing/components/RouteIdentifier';
import Loading from './components/loading/Loading';
import { getRoutes } from './routing/helper';
import routesAndMenuItems from './routes.js';

const App = () => {
  const routes = useMemo(() => getRoutes({ data: routesAndMenuItems }), []);
  return(
        <RouteIdentifier routes={routes} fallback={<Loading />} />);
  }

export default App;
