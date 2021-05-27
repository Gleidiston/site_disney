import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/home";
import ToSing from "../../pages/toSign";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/toSing" component={ToSing} />
      </Switch>
    </BrowserRouter>
  );
}
