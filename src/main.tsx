import "./global.css";

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { AppRoute } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<div>Aguarde...</div>}>
        <RouterProvider router={AppRoute} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
