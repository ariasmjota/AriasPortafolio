import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { About } from "../About/About";
import { Portafolio } from "../Portafolio/Portafolio";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Portafolio} />
      <Route path="/about" exact component={About} />
    </Router>
  );
};
