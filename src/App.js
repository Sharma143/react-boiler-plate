import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Routes
import * as routes from "routes/routes";
import CustomRoute from "routes/customRoute";

// Pages
import Login from "pages/login/Login";
import Dashboard from "pages/dashboard/Dashboard";
import Overview from 'pages/overview/Overview';

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Router >
        <Switch>
          <CustomRoute
            path={routes.LOGIN}
            exact
            component={Login}
          />
          <CustomRoute
            // restricted
            path={routes.ROOT}
            exact
            component={Dashboard}
          />
          <CustomRoute
            // restricted
            path={routes.OVERVIEW}
            exact
            component={Overview}
          />
          <Route path='/' render={() => "Route Not Found"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
