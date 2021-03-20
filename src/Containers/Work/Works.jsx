import * as React from "react";
import { JackInTheBox, Bounce } from "react-awesome-reveal";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

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
            <Link className="" to={"/work/go"}>
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
            </Link>
          </Bounce>
          <Bounce>
            <Link className="" to={"/work/dmi"}>
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
            </Link>
          </Bounce>
          <Bounce>
            <Link className="" to={"/work/classed"}>
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
            </Link>
          </Bounce>
        </section>
       {/* Dos */}
        <section className="works__individual">
          <Bounce>
            <Link className="" to={"/work/ghost"}>
              <section className="projects__individuals">
                <img
                  className="projects__individuals--img"
                  src={process.env.PUBLIC_URL + "/assets/images/ghost.png"}
                  alt="Mock up app"
                ></img>
                <article className="projects__individuals--do">
                  <p className="home__hi-top--para">UI</p>
                  <p className="home__hi-top--para">DEV</p>
                </article>
              </section>
            </Link>
          </Bounce>
          <Bounce>
            <Link className="" to={"/work/eduteka"}>
              <section className="projects__individuals">
                <img
                  className="projects__individuals--img"
                  src={process.env.PUBLIC_URL + "/assets/images/eduteka.png"}
                  alt="Mock up app"
                ></img>
                <article className="projects__individuals--do">
                  <p className="home__hi-top--para">UR</p>
                  <p className="home__hi-top--para">UX</p>
                  <p className="home__hi-top--para">UI</p>
                </article>
              </section>
            </Link>
          </Bounce>
          <Bounce>
            <Link className="" to={"/work/brand"}>
              <section className="projects__individuals">
                <img
                  className="projects__individuals--img"
                  src={process.env.PUBLIC_URL + "/assets/images/brand.png"}
                  alt="Mock up app"
                ></img>
                <article className="projects__individuals--do">
                  <p className="home__hi-top--para">DESIGN</p>

                </article>
              </section>
            </Link>
          </Bounce>
        </section>
    
      </article>
    </div>
  );
};
