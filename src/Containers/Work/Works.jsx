import * as React from "react";
import { JackInTheBox, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";

export const Works = () => {
  return (
    <div>
      <Nav />
      <article className="home__bg">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/ls.png"}
          alt="Background Maria Jose"
        ></img>
      </article>
      <article className="works">
        <JackInTheBox>
          <div className="home__hi-top-title">
            <h1>My works</h1>
          </div>
        </JackInTheBox>
        <section className="works__individual">
        <Bounce>
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
        </Bounce>
        <Bounce>
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
        </Bounce>
        <Bounce>
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
        </Bounce>
        </section>
      </article>
    </div>
  );
};
