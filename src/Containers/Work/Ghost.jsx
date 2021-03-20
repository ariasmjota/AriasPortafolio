import * as React from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Ghost = () => {
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
                href="https://www.behance.net/gallery/105095475/Ghost-Lab-_Tech-Solutions"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/behance2.svg"}
                  alt="Behance logo"
                ></img>
              </a>
            </div>

            <div className="icons">
              <a
                className="icons__class"
                target="_blank"
                href="https://github.com/NicolasMonteroM/GhostLab"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/git2.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>

            <div className="icons">
              <a
                className="icons__class"
                target="pdf-frame"
                href="https://nicolasmonterom.github.io/GhostLab/"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/web2.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>
          </div>
        </section>
        <Fade delay={100}>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g1.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g2.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g3.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g4.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g5.jpg"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>

        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g6.jpg"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g7.jpg"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g8.jpg"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g10.jpg"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/g11.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
      </section>
    </div>
  );
};
