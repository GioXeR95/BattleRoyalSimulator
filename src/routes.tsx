import { type RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>"Hello, World!"</div>,
  },
  {
    path: "/about",
    element: <div>"About Us"</div>,
  }
];

export default routes;