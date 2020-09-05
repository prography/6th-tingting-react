import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";

import './reset.css';
import "./utils/fonts/index.css";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/admin" component={Admin} />
        </Switch>
  </Router>,
  document.getElementById('root'));

