import { type RouteObject } from "react-router";
import HomePage from "./pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <div>"About Us"</div>,
  },
];

export default routes;