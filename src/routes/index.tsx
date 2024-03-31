import Home from "@/pages/home";
import Login from "@/pages/login";
import MasterPage from "@/pages/master-page";
import MyRequests from "@/pages/my-requests";
import Admin from "@/pages/settings";
import Category from "@/pages/settings/category";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />,
    children: [
      { path: "", element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "home", element: (<ProtectedRoute> <Home /> </ProtectedRoute>), },
      { path: "pedidos", element: (<ProtectedRoute> <MyRequests /> </ProtectedRoute>) },
      {
        path: "admin", element: (<ProtectedRoute> <Admin /> </ProtectedRoute>),
        children: [
          { path: "category", element: <Category /> },
        ]
      }
    ]
  }
],
);
