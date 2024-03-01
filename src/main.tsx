import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { HeaderComponent } from "./components/header/header-component.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HeaderComponent />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
