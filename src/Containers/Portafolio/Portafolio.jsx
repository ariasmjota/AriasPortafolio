import * as React from "react";
import { Link } from "react-router-dom";
import { JackInTheBox, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Portafolio = () => {
  return (
    <div>
      <Nav />

      <section id="/" className="home">
        {/* Banner */}
        <article className="home__bg">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/bg1.png"}
            alt="Background Maria Jose"
          ></img>
        </article>
        {/* Me */}
        <article className="home__hi">
          <section className="home__hi-top">
            <JackInTheBox>
              <div className="home__hi-top-title">
                <h1>HI, I’M MARÍA J</h1>
              </div>
            </JackInTheBox>
            <div className="home__hi-top--para">
              <p>
                My <strong>creativity </strong>creativity allows me to build{" "}
              </p>
              <br></br>
            </div>
            <p className="home__hi-top--para">
              <strong>experiences</strong> and <strong>interfaces</strong>.
            </p>
          </section>

          <section className="home__hi-bottom">
            <div className="icons">
              <a
                className="icons__home"
                target="_blank"
                href="https://www.behance.net/ariasmjota"
              >
                <img
                  className="icons__home"
                  src={process.env.PUBLIC_URL + "/assets/svg/behance.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>
            <div className="icons">
              <a
                className="icons__home"
                target="_blank"
                href="https://www.linkedin.com/in/ariasmjota/"
              >
                <img
                  className="icons__home"
                  src={process.env.PUBLIC_URL + "/assets/svg/link.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>
            <div className="icons">
              <a
                className="icons__home"
                target="_blank"
                href="https://github.com/ariasmjota"
              >
                <img
                  className="icons__home"
                  src={process.env.PUBLIC_URL + "/assets/svg/git.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>
          </section>
        </article>
        <article className="home__change">
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/icon1.svg"}
            alt="Mock up app"
          ></img>
        </article>
        {/* What I do */}
        <section className="home__do">
          <article className="home__do-top">
            <JackInTheBox>
              <div className="home__hi-top-title">
                <h1>what i do?</h1>
              </div>
            </JackInTheBox>
          </article>
          <article className="home__do-bottom">
            <section className="home__do-bottom--one">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/m1.png"}
                alt="Maria Jose Arias photo"
              ></img>
            </section>
            <section className="home__do-bottom--two">
              <div className="home__do-bottom--item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/web.svg"}
                  alt="Skill web Maria Jose"
                ></img>
                <p className="home__hi-top--para">
                  Web, App and GameDevelopment
                </p>
              </div>
              <div className="home__do-bottom--item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/ux.svg"}
                  alt="Skills UX Maria Jose"
                ></img>
                <p className="home__hi-top--para">
                  User Experience and User Interface
                </p>
              </div>
              <div className="home__do-bottom--item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/research.svg"}
                  alt="Skills UR Maria Jose"
                ></img>
                <p className="home__hi-top--para">Research through Design</p>
              </div>
              <div className="home__do-bottom--item">
                <img
                  src={process.env.PUBLIC_URL + "/assets/svg/prototype.svg"}
                  alt="Skills Prototype Maria Jose"
                ></img>
                <p className="home__hi-top--para">Prototyping</p>
              </div>
            </section>
          </article>
        </section>
        <article className="home__change">
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/icon2.svg"}
            alt="Mock up app"
          ></img>
        </article>
        {/* Projects */}
        <section className="projects">
          <JackInTheBox>
            <div className="home__hi-top-title">
              <h1>My projects</h1>
            </div>
          </JackInTheBox>

          <article className="projects__individual">
            <section className="projects__individuals">
              <img
                className="projects__individuals--img"
                src={process.env.PUBLIC_URL + "/assets/images/classed.png"}
                alt="Mock up app"
              ></img>
              <article className="projects__individuals--do">
                <p className="home__hi-top--para">UR</p>
                <p className="home__hi-top--para">UX</p>
                <p className="home__hi-top--para">UI</p>
              </article>
            </section>

            <section className="projects__individuals">
              <img
                className="projects__individuals--img"
                src={process.env.PUBLIC_URL + "/assets/images/dmi.png"}
                alt="Mock up app"
              ></img>
              <article className="projects__individuals--do">
                <p className="home__hi-top--para">UR</p>
                <p className="home__hi-top--para">UX</p>
                <p className="home__hi-top--para">UI</p>
              </article>
            </section>

            <section className="projects__individuals">
              <img
                className="projects__individuals--img"
                src={process.env.PUBLIC_URL + "/assets/images/go.png"}
                alt="Mock up app"
              ></img>
              <article className="projects__individuals--do">
                <p className="home__hi-top--para">UR</p>
                <p className="home__hi-top--para">UI</p>
                <p className="home__hi-top--para">DEV</p>
              </article>
            </section>
          </article>

          <div className="home__hi-top-subtitle">
            <Bounce>
            <Link className="" to={"/work"}>
              <a className="home__hi-top-subtitle">See all</a>
              </Link>
            </Bounce>
          </div>
        </section>
        {/* Contact */}
        <article className="home__change2">
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/icon3.svg"}
            alt="Mock up app"
          ></img>
        </article>
        <article className="home__bg">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/bg2.png"}
            alt="Backgorund Maria Jose"
          ></img>
        </article>
        <section className="home__contact">
          <section className="home__hi-top">
            <JackInTheBox>
              <div className="home__hi-top-title">
                <h1>cONTACT ME!</h1>
              </div>
            </JackInTheBox>
          </section>

          <section className="home__hi-bottom">
            <div className="icons">
              <a
                className="icons__home"
                target="_blank"
                href="mailto:majota13u@gmail.com?Subject=Hello María!"
              >
                <img
                  className="icons__home"
                  src={process.env.PUBLIC_URL + "/assets/svg/mail.svg"}
                  alt="Mail logo"
                ></img>
              </a>
            </div>

            <div className="icons">
              <a
                className="icons__home"
                target="_blank"
                href="https://www.linkedin.com/in/ariasmjota/"
              >
                <img
                  className="icons__home"
                  src={process.env.PUBLIC_URL + "/assets/svg/link.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>

            <div className="icons">
              <a
                className="icons__home"
                target="pdf-frame"
                href="/assets/documents/cv.pdf"
                download
              >
                <img
                  className="icons__home"
                  src={process.env.PUBLIC_URL + "/assets/svg/donw.svg"}
                  alt="GitHub logo"
                ></img>
              </a>
            </div>
          </section>
        </section>
        {/* End */}
      </section>
    </div>
  );
};
