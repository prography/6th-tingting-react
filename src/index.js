import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Core Components
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
//Index CSS
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/admin" component={Admin} />
        </Switch>
  </Router>,
  document.getElementById('root'));

