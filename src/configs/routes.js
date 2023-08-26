import { createBrowserRouter } from "react-router-dom";

import * as paths from './paths';

import HomePage from "../views/HomePage";
import Vendors from "../views/Vendors";
import NotFound from "../views/NotFound";

export const router = createBrowserRouter([
  {
    path: paths.ROOT_PATH,
    Component: HomePage,
    exact: true,
  },
  {
    path: paths.VENDORS_PATH,
    Component: Vendors,
    exact: true,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
