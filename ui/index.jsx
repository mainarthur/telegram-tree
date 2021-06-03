import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Pages from "./constants/Pages";
import store from "./redux/store";

render(
  <Provider store={store}>
    <Router>
      <Route path={Pages.HOME} component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
