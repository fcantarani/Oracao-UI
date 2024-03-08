import Home from "@/pages/home";
import MasterPager from "@/pages/master-page";
import MyRequests from "@/pages/my-requests";
import Admin from "@/pages/settings";
import Category from "@/pages/settings/category";
import { createBrowserRouter } from "react-router-dom";

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <MasterPager />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/pedidos", element: <MyRequests /> },
      { path: "/admin", element: <Admin /> },
      { path: "/admin/category", element: <Category /> },
    ],
  },
]);
