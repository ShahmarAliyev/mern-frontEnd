import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
root.render(app);

reportWebVitals();
