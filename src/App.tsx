import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Switch } from "react-router-dom";
import Introduction from "./pages/Introduction";
import { Wrapper } from "./styles/Global";
import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Introduction />
      </Route>
      <Route exact path="/home"></Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register"></Route>
    </Switch>
  );
}

export default App;
