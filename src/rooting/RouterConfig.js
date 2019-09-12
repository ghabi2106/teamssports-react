import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import UserService from "../services/user.service";
import history from "./history";

function RouteConfig() {
  return (
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        <PrivateRoute
          component={route.component}
          isPublic={route.isPublic}
          {...props}
        />
      )}
    />
  );
}

export const PrivateRoute = ({
  component: Component,
  isPublic,
  status,
  ...rest
}) => (
  <Router history={history}>
    <Route
      {...rest}
      render={props =>
        isPublic || (!isPublic && UserService.isAuthentificated()) ? (
          <Component {...props} status={status} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  </Router>
);

export default RouteConfig;
