import * as React from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Go = () => {
  return (
    <div>
      <Nav />
      <section className="go">
        <Fade>
          <div className="go__header">
            <p className="home__hi-top-subtitle" >Web design</p>
          </div>
        </Fade>
        <section className="class__icons">
          <div className= "p">
          <div className="icons">
            <a
              className="icons__class"
              target="_blank"
              href="https://www.behance.net/gallery/106946623/Go-Munch"
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
              href="https://github.com/ariasmjota/gomuch"
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
              href="https://gomunch-87de6.web.app/"
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
              src={process.env.PUBLIC_URL + "/assets/images/projects/1.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/2.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/3.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/5.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/6.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>

        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/8.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/10.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/11.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
        <Fade>
          <div className="go__section">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/projects/7.png"}
              alt="Background Maria Jose"
            ></img>
          </div>
        </Fade>
      </section>
    </div>
  );
};
