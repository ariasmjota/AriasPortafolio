import * as React from "react";
import { JackInTheBox, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const About = () => {
  return (
    <div id="about">
      <Nav />
      <section className="about">
        <article className="home__bg">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/m2.png"}
            alt="Mock up app"
          ></img>
        </article>
        {/* Me */}
        <article className="about__hi">
          <section className="home__hi-top">
            <JackInTheBox>
              <div className="home__hi-top-title">
                <h1>HI!</h1>
              </div>
            </JackInTheBox>
          </section>
          <div className="about__hi-bottom">
            <p className="home__hi-top-subtitle">
              I'm <strong>María Jose Arias</strong>
            </p>
            <br></br>
            <p>
              I'm 20 years old Colombian ‘Interactive Designer’ from ICESI
              University.
            </p>
            <br></br>
            <p>
              {" "}
              I’ve worked with <mark>user experience</mark> and{" "}
              <mark>development</mark>.
            </p>
          </div>
        </article>
        <article className="home__change">
          <img
            src={process.env.PUBLIC_URL + "/assets/svg/icon1.svg"}
            alt="Mock up app"
          ></img>
        </article>
        <section className="about__do">
          <article className="about__do-top">
            <JackInTheBox>
              <div className="home__hi-top-title">
                <h1>what i do?</h1>
              </div>
            </JackInTheBox>
            <section className="about__para">
              <p>
                I'm able to conduct and manage <mark>research</mark>, ideation
                and iteration of digital products in order to <mark>make</mark>{" "}
                them <mark>human-centered </mark>, strategic for business,
                easy-to-use and visually appealing.
              </p>
            </section>
          </article>
          {/* Skills */}
          <section className="about__all">
            <div className="about__skill">
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/web.svg"}
                alt="Mock up app"
              ></img>
              <article className="about__skill-information">
                <p className="home__hi-top--para">
                  Web, App and GameDevelopment
                </p>
                <section className="about__softwares">
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/html.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/css.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/sass.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/js.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/react.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/git.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                </section>
              </article>
            </div>
            <div className="about__skill">
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/ux.svg"}
                alt="Mock up app"
              ></img>
              <article className="about__skill-information">
                <p className="home__hi-top--para">
                  User Experience and User Interface
                </p>
                <section className="about__softwares">
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/view.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/document.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/illus.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/figma.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/photo.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/after.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                </section>
              </article>
            </div>
            <div className="about__skill">
              <img
                src={process.env.PUBLIC_URL + "/assets/svg/research.svg"}
                alt="Mock up app"
              ></img>
              <article className="about__skill-information">
                <p className="home__hi-top--para">Research through Design</p>
                <section className="about__softwares">
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/view.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/document.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/inter.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                  <div className="about__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/svg/software/new/task.svg"
                      }
                      alt="Mock up app"
                    ></img>
                  </div>
                </section>
              </article>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};
