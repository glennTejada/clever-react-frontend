import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./Common/Login/Login";
import Registration from "./Common/Login/Registration";
import ResetPass from "./Common/Login/ResetPass";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration">
          <Registration />
        </Route>{" "}
        {/* <Route exact path="/">
          <Login />
        </Route> */}
        <Route exact path="/recovery-pass" component={ResetPass} />
      </Switch>
    </Router>
  );
};

export default App;
