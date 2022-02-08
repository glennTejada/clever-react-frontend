import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import AuthMiddleware from "./Routes/Middleware/AuthMiddleware";
import { openRoute, PrivetRoute } from "./Routes/Routes";

export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          {openRoute.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {PrivetRoute.map((route, idx) => (
            <AuthMiddleware
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
        {/* <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration">
            <Registration />
          </Route>{" "}
          <Route exact path="/recovery-pass" component={ResetPass} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch> */}
      </Router>
    </UserContext.Provider>
  );
};

export default App;
