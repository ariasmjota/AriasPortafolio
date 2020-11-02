import * as React from "react";
import { JackInTheBox, Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

export const About = () => {
  return (
    <div>
      <Nav />
      <section id="/about" className="about">
        <article className="about__left">
          <section className="about__left-top">
            <div className="home__titles-four">
              <Bounce>
                <p>María José</p>
              </Bounce>
            </div>
            <div className="home__titles-three">
              <Bounce>
                <p>Arias B.</p>
              </Bounce>
            </div>
            <article className="data">
              <a
                className="data__anchor"
                target="_blank"
                href="https://www.behance.net/ariasmjota"
              >
                <i className="fab fa-behance"></i>
              </a>
              <a
                className="data__anchor"
                target="_blank"
                href="https://www.linkedin.com/in/ariasmjota/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="data__anchor"
                target="_blank"
                href="https://github.com/ariasmjota"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="data__anchor"
                id="downloadCV"
                href="assets/documents/Santiago Mondragón Resume.pdf"
                target="pdf-frame"
              >
                <i className="fas fa-file-download"></i>
              </a>
            </article>
          </section>
          <section className="about__left-bottom">
            <p>
              I love to shape design projects by iterating, iterating and
              iterating.
            </p>
            <br></br>
            <p>
              As a UX researcher, I identify the user’s needs and objectives, I
              also establish the test work models and I carry out the subsequent
              analysis of the information obtained from these. Additionally, I
              get to the deliver the reports that are based on the design
              research that is focused on the user. And my role as a UX
              designer, focuses on designing solid solutions to perceived
              problems previously found on a user-centered research.
            </p>
          </section>
        </article>
        <article className="about__right">
          <img
            className="about__right-photo"
            src={process.env.PUBLIC_URL + "/assets/images/memac.png"}
            alt="Photo Maria Arias"
          ></img>
          <p>
            In my role as a product designer, I am part of the process of
            creating products that generate experiences in the user, having as a
            starting point the definition of real problems in us, human beings,
            to think about possible satisfactory solutions.
          </p>
        </article>
      </section>
      <section className="skillsandexpertice">
        <section className="skills">
          <article className="skills__tittle">
            <div className="home__titles-four">
              <Bounce>
                <p>Skills</p>
              </Bounce>
            </div>
          </article>
          <ul className="skills__menu">
            <li>
              <a>
                <span>Js</span>
              </a>
            </li>
            <li>
              <a>
                <span>UX</span>
              </a>
            </li>
            <li>
              <a>
                <span>UR</span>
              </a>
            </li>
            <li>
              <a>
                <span>UI</span>
              </a>
            </li>
          </ul>
          <article className="skills__sections">
            <article className="skills__explications">
              <div
                id="skills__explications-web"
                className="skills__explications-web"
              >
                <h2>Front-end Development</h2>
                <p>
                  Able to define the form, function, usability, ergonomics,
                  brand image and other aspects that affect the external
                  appearance of user interfaces in systems of all types, all
                  this through principles of visual and graphic design.
                </p>
                <div className="software">
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                </div>
              </div>

              <div id="skills__explications-ux" className="content">
                <h2>User Experience Design</h2>
                <p>
                  Able to create products, solutions or prototypes, combining
                  different kinds of methodologies, that customers / users would
                  be attracted to, be easy to use and quickly to understand, in
                  order to bring them the best experience possible.
                </p>

                <div className="software">
                  <i className="fab fa-adobe"></i>
                  <i className="fab fa-figma"></i>
                  <i className="fab fa-invision"></i>
                </div>
              </div>

              <div id="skills__explications-ui" className="content">
                <h2>User Interface Design</h2>
                <p>
                  Able to define the form, function, usability, ergonomics,
                  brand image and other aspects that affect the external
                  appearance of user interfaces in systems of all types, all
                  this through principles of visual and graphic design.
                </p>

                <div className="software">
                  <i className="fab fa-adobe"></i>
                  <i className="fab fa-figma"></i>
                </div>
              </div>

              <div id="skills__explications-ur" className="content">
                <h2>User Research</h2>
                <p>
                  Able to define the form, function, usability, ergonomics,
                  brand image and other aspects that affect the external
                  appearance of user interfaces in systems of all types, all
                  this through principles of visual and graphic design.
                </p>

                <div className="software">
                  <i className="fas fa-eye"></i>
                  <i className="fas fa-sticky-note"></i>
                  <i className="fas fa-book-reader"></i>
                  <i className="fas fa-map"></i>
                  <i className="fas fa-clipboard-list"></i>
                </div>
              </div>
            </article>
          </article>
        </section>

        <article className="expertise">
          <article className="expertise__tittle">
            <div className="home__titles-four">
              <Bounce>
                <p>expertise</p>
              </Bounce>
            </div>
          </article>
          <ul className="expertise__menu">
            <li>
              <a>
                <span>LS</span>
              </a>
            </li>
            <li>
              <a>
                <span>TW</span>
              </a>
            </li>
            <li>
              <a>
                <span>AT</span>
              </a>
            </li>
            <li>
              <a>
                <span>BF</span>
              </a>
            </li>
          </ul>
          <div className="skills__sections">
            <article className="skills__explications">
              <div id="leaderContent" className="skills__explications">
                <h2>Leadership</h2>
                <p>
                  Able to define the form, function, usability, ergonomics,
                  brand image and other aspects that affect the external
                  appearance of user interfaces in systems of all types, all
                  this through principles of visual and graphic design.
                </p>

                <div className="software">
                  <i className="fas fa-users"></i>
                  <i className="fas fa-chalkboard-teacher"></i>
                  <i className="fas fa-balance-scale"></i>
                </div>
              </div>

              <div id="teamContent" className="skills__explications">
                <h2>TeamWork</h2>
                <p>
                  Able to create products, solutions or prototypes, combining
                  different kinds of methodologies, that customers / users would
                  be attracted to, be easy to use and quickly to understand, in
                  order to bring them the best experience possible.
                </p>

                <div className="software">
                  <i className="fas fa-comments"></i>
                  <i className="fab fa-slack"></i>
                  <i className="fas fa-handshake"></i>
                </div>
              </div>

              <div id="analyticContent" className="skills__explications">
                <h2>Analytical Thinking</h2>
                <p>
                  Able to define the form, function, usability, ergonomics,
                  brand image and other aspects that affect the external
                  appearance of user interfaces in systems of all types, all
                  this through principles of visual and graphic design.
                </p>

                <div className="software">
                  <i className="fas fa-puzzle-piece"></i>
                  <i className="fas fa-map-signs"></i>
                  <i className="fas fa-cogs"></i>
                </div>
              </div>

              <div id="businessContent" className="skills__explications">
                <h2>Business Focused</h2>
                <p>
                  Able to define the form, function, usability, ergonomics,
                  brand image and other aspects that affect the external
                  appearance of user interfaces in systems of all types, all
                  this through principles of visual and graphic design.
                </p>

                <div className="software">
                  <i className="fas fa-chart-line"></i>
                  <i className="fas fa-percent"></i>
                  <i className="fas fa-dollar-sign"></i>
                </div>
              </div>
            </article>
          </div>
        </article>
      </section>
     
    </div>
  );
};
