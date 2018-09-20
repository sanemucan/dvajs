import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";

import Posts from "./routes/Posts.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
