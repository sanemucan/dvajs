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
        <Route path="/posts/:key" component={PostDetail} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
}

const Sanem = ({ match }) => {
  return <div>Sanem {match.params.key}</div>;
};

export default RouterConfig;
