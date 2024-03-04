// cra imports
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals.js';


// import html head tags requirements
import { Helmet } from 'react-helmet';
import { REACT_HELMET_PROPS } from './config.js';

// import routing modules
import { BrowserRouter as Router } from 'react-router-dom';
import RouteIdentifier from './routing/components/RouteIdentifier';
import Loading from './components/loading/Loading';

// import routes
import { getRoutes } from './routing/helper';
import defaultRoutes from './routing/default-routes';
import routesAndMenuItems from './routes.js';



const Main = () => {
  const layoutlessRoutes = useMemo(() => getRoutes({ data: routesAndMenuItems }), []);

  return (
    <>
        {/* <Helmet {...REACT_HELMET_PROPS} /> */}
        <Router basename={process.env.REACT_APP_BASENAME}>
            <RouteIdentifier routes={[...layoutlessRoutes, ...defaultRoutes]} fallback={<Loading />} />
        </Router>
        </>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
