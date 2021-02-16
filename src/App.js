import React from "react";
import { Route, Switch } from "react-router-dom";
import { Headers } from "./Components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Headers />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
