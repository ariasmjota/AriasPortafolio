import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { About } from "../About/About";
import { Contact } from "../Call/Contact";
import { Portafolio } from "../Portafolio/Portafolio";
import { Brand } from "../Work/Brand";
import { Classed } from "../Work/Classed";
import { Dmi } from "../Work/Dmi";
import { Eduteka } from "../Work/Eduteka";
import { Ghost } from "../Work/Ghost";
import { Go } from "../Work/Gomunch";
import { Works } from "../Work/Works";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Portafolio} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/work" exact component={Works} />
      <Route path="/work/go" exact component={Go} />
      <Route path="/work/dmi" exact component={Dmi} />
      <Route path="/work/classed" exact component={Classed} />
      <Route path="/work/ghost" exact component={Ghost} />
      <Route path="/work/eduteka" exact component={Eduteka} />
      <Route path="/work/brand" exact component={Brand} />
    </Router>
  );
};
