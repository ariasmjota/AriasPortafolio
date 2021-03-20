import * as React from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Classed = () => {
  return (
    <div>
      <Nav />
      <section className="go">
        <Fade>
          <div className="go__header">
            <p className="home__hi-top-subtitle"> Product designer</p>
            </div>
        </Fade>
        <section className="class__icon">
            <a        
            className="icons__class"    
              target="_blank"
              href="https://www.behance.net/gallery/106584657/Classed-app"
            >
              <img
                
                src={process.env.PUBLIC_URL + "/assets/svg/behance2.svg"}
                alt="Behance logo"
              ></img>
            </a>
        </section>
        <Fade delay={100}>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/clas1.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/clas2.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/clas3.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/clas4.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/clas5.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/clas6.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
      </section>
    </div>
  );
};
