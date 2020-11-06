import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { About } from "../About/About";
import { Contact } from "../Call/Contact";
import { Portafolio } from "../Portafolio/Portafolio";
import { Works } from "../Work/Works";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Portafolio} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/work" exact component={Works} />
    </Router>
  );
};
