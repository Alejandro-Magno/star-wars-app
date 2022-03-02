import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import "./index.css";
import { Provider } from "react-redux";
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
