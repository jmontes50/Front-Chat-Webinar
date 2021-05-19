import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import MainView from "./views/MainView";

export default function Routes() {
  return (
    <Fragment>
      <Route path="/" exact component={LoginView} />
      <Route path="/main" exact component={MainView} />
    </Fragment>
  );
}
