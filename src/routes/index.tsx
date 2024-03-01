import Home from "@/pages/home";
import MyRequests from "@/pages/my-requests";
import Admin from "@/pages/settings";
import { createBrowserRouter } from "react-router-dom";

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/home", element: <Home /> },
      { path: "/pedidos", element: <MyRequests /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
]);
