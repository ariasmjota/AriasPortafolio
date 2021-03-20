import * as React from "react";
import { JackInTheBox, Fade } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Contact = () => {
  return (
    <div id="contact">
      <Nav />
      <Fade direction="down" triggerOnce="true">
        <article className="home__bg">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/bg2.png"}
            alt="Mock up app"
          ></img>
        </article>
        <section className="home__contact">
          <section className="home__hi-top">
            <JackInTheBox>
              <div className="home__hi-top-title">
                <h1>cONTACT ME!</h1>
              </div>
            </JackInTheBox>
            <div className="contact_p">
              <p className="home__hi-top--para">
                Let's get in <mark>contact</mark> and find out how I can help
                you. I leave you
                <mark>different</mark> ways to find me.
              </p>
            </div>
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
                download
                src={process.env.PUBLIC_URL + "/assets/documents/cv.pdf"}
                href={process.env.PUBLIC_URL + "/assets/documents/cv.pdf"}
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
      </Fade>
    </div>
  );
};
