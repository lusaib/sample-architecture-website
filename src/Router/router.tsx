import { RouteObject, createBrowserRouter } from "react-router-dom";
import { homePageLoader } from "../Loaders";
import { ErrorPage } from "../components";
import { Root } from "../Layout";
import { Home } from "../Pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: homePageLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
