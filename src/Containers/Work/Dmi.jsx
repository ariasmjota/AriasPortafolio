import * as React from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Dmi = () => {
  return (
    <div>
      <Nav />

      <section className="go">
        <Fade>
          <div className="go__header">
            <p className="home__hi-top-subtitle">Web design</p>
          </div>
        </Fade>
        <section className="class__icons">
          <div className="p">
            <div className="icons">
              <a
                className="icons__class"
                target="_blank"
                href="https://www.behance.net/gallery/106604843/DMI-partner"
              >
                <img
                  className="icons__class"
                  src={process.env.PUBLIC_URL + "/assets/svg/behance2.svg"}
                  alt="Behance logo"
                ></img>
              </a>
            </div>

            <div className="icons">
              <a
                className="icons__class"
                target="_blank"
                href="https://www.figma.com/proto/7WWEhgBiy6FtXqdzfQx9xs/Proyecto-Confianza?node-id=247%3A1678%20viewport=1232%2C194%2C0.021423015743494034%20scaling=scale-down"
              >
                <img
                  className="icons__class"
                  src={process.env.PUBLIC_URL + "/assets/svg/figma2.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>
          </div>
        </section>
        <Fade delay={100}>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi1.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi2.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi3.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi4.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi5.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi6.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi7.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/dmi8.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
      </section>
    </div>
  );
};
