import { lazy } from 'react';
import { DEFAULT_PATHS } from './../config.js';

const App = lazy(() => import('../App.js'));
const Home = lazy(() => import('../views/Home'));
const Blog = lazy(() => import('../views/Blog'));
/*
{ path: "/path", exact: true, component: ViewHome },
// or
{ path: "/path", component: ViewHome},
// or
{ path: "/path", exact: true, redirect: true, to: "/redirectPath" },
*/
const defaultRoutes = [
  { path: DEFAULT_PATHS.APP, component: App}, // Private route
  { path: '/', exact: true, component: Home},
  { path: '/Blog', exact: true, component: Blog}, // Private route
];

export default defaultRoutes;
