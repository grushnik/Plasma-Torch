import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";        // ← THIS wires Tailwind into the bundle

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

