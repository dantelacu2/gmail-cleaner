import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Login from "./Login";
import { dashboardRoutes } from "./routes";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route>
            <DefaultLayout>
              <Switch>
                {dashboardRoutes.map((route) => {
                  return (
                    <Route exact path={route.path} component={route.component} />
                  )
                })
                }
\              </Switch>
            </DefaultLayout>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;