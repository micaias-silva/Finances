import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Switch } from "react-router-dom";
import Introduction from "./pages/Introduction";
import { Wrapper } from "./styles/Global";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Introduction />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
