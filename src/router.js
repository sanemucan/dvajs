import React from "react";
import { Router, Route, Switch, history } from "dva/router";
import IndexPage from "./routes/IndexPage";

import Posts from "./routes/Posts.js";

import PostDetail from "./routes/post-detail.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/posts" component={Posts} />
        <Route path="/posts/:postId" component={PostDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
