import { type RouteObject } from "react-router";
import Playground from "./pages/Playground";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>"Hello, World!"</div>,
  },
  {
    path: "/about",
    element: <div>"About Us"</div>,
  },
  {
    path: "/playground",
    element: <Playground />,
  }
];

export default routes;