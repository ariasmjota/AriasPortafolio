import * as React from "react";
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

export const Portafolio = () => {
  return (
    <div>
      {/* NAV SECTION */}
      <section class="navBar">
        <img
          class="navBar__logo"
          src="./assets/svg/LogoArias.svg"
          alt="Logo Maria Arias"
        ></img>

        <ul class="navBar__menu">
          <li>
            <a href="/#">
              <i class="fas fa-user-astronaut"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/#/about">
              <i class="fas fa-user-astronaut"></i>
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="/#/work">
              <i class="fas fa-briefcase"></i>
              <span>My Work</span>
            </a>
          </li>
          <li>
            <a href="/#/contact">
              <i class=" fas fa-mail-bulk"></i>
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="home">
        <div class="home__top">
          <article class="home__tittles">
            <div class="home__tittles-one">
              <JackInTheBox>
                <p>problems</p>
              </JackInTheBox>
            </div>

            <div class="home__tittles-two">
              <JackInTheBox delay={1000}>
                <p>ideas</p>
              </JackInTheBox>
            </div>

            <div class="home__tittles-three">
              <JackInTheBox delay={2000}>
                <p>Projects</p>
              </JackInTheBox>
            </div>

            <div class="home__tittles-four">
              <JackInTheBox delay={3000}>
                <p>solutions</p>
              </JackInTheBox>
            </div>
          </article>
          <article class="home__project"></article>
        </div>
        <div class="home__bottom">
          <article class="home__bottom-left">
            <p>
              An <stronger>Interaction Designer</stronger> and UI/UX Developer from Cali, Colombia.
            </p>
            <p>
              I'm a passionate about <stronger>problem-solving</stronger> challenges through design.
            </p>
          </article>
          <article class="home__bottom-right">
              <p>Hello, I'm a passionate about problem-solving challenges through design. I have run and manage research, ideation and iteration of digital products in order to make them human-centered, easy-to-use and visually appealing, additionally I enjoy learning about web design and front-end development.</p>
          </article>
        </div>
      </section>
    </div>
  );
};
