/* eslint-disable */
import { lazy } from 'react';
import { DEFAULT_PATHS } from './config.js';

const blog = lazy(() => import('./views/Blog'));
const home = lazy(() => import('./views/Home'));


const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${appRoot}/home`,
    },
    {
      path: `${appRoot}/blog`,
      component: blog,
      label: 'menu.blog',
      icon: 'file-text',
    },
  ],
};
export default routesAndMenuItems;
