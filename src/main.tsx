import "./global.css";

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { AppRoute } from "./routes/index.tsx";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider.tsx";

//Importação do Moment
import moment from "moment";
import "moment/dist/locale/pt-br";

moment.locale("pt-br");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<div>Aguarde...</div>}>
        <AuthContextProvider>
          <RouterProvider router={AppRoute} />
        </AuthContextProvider>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
