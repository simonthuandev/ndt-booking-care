import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutPage />}
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
