import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Details from "./pages/Details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/details/:category/:id" element={<Details />} />
      </Switch>
    </Router>
  </React.StrictMode>
);
