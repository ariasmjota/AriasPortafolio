import * as React from "react";
import { JackInTheBox, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Contact = () => {
  return (
    <div id="contact">
      <Nav />
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
    </div>
  );
};
