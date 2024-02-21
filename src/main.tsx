import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AOS from "aos";

import "./index.css";
import "aos/dist/aos.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

AOS.init({
  offset: 150,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
