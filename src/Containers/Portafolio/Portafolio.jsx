import * as React from "react";
import { JackInTheBox, Bounce } from "react-awesome-reveal";

export const Portafolio = () => {
  return (
    <div>
      {/* NAV SECTION */}
      <section class="navBar">
        <img
          class="navBar__logo"
          src={process.env.PUBLIC_URL + "/assets/svg/logoArias.svg"}
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
              <JackInTheBox delay={500}>
                <p>ideas</p>
              </JackInTheBox>
            </div>

            <div class="home__tittles-three">
              <JackInTheBox delay={1000}>
                <p>Projects</p>
              </JackInTheBox>
            </div>

            <div class="home__tittles-four">
              <JackInTheBox delay={1500}>
                <p>solutions</p>
              </JackInTheBox>
            </div>
          </article>
          <article class="home__project"></article>
        </div>
        <div class="home__bottom">
          <article class="home__bottom-left">
            <p>
              An Interaction Designer and UI/UX Developer from Cali, Colombia.
            </p>
            <p>
              I'm a passionate about problem-solving challenges through design.
            </p>
          </article>
          <article class="home__bottom-right">
            <p>
              Hello, I'm a passionate about problem-solving challenges through
              design. I have run and manage research, ideation and iteration of
              digital products in order to make them human-centered, easy-to-use
              and visually appealing, additionally I enjoy learning about web
              design and front-end development.
            </p>
          </article>
        </div>
      </section>
      <section class="about">
        <article class="about__left">
          <section class="about__left-top">
            <div class="home__tittles-four">
              <Bounce>
                <p>María José</p>
              </Bounce>
            </div>
            <div class="home__tittles-three">
              <Bounce>
                <p>Arias B.</p>
              </Bounce>
            </div>
          </section>
          <section class="about__left-bottom">
            <p>
              Hello, I am an Interactive Media Designer student at Icesi
              University in Cali, Colombia, currently in my last year.
            </p>
            <p>
              I'm a passionate about problem-solving challenges through design.
              I have run and manage research, ideation and iteration of digital
              products in order to make them human-centered, easy-to-use and
              visually appealing, Web Design and Front-end Development.
            </p>
          </section>
        </article>
        <article class="about__right">
          <img
            class="about__right-photo"
            src={process.env.PUBLIC_URL + "/assets/images/me.jpg"}
            alt="Logo Maria Arias"
          ></img>
        </article>
      </section>

      <section class="skills">
        <article  class="skills__tittle">
        <div class="home__tittles-four">
        
          <Bounce>
            <p>Skills</p>
          </Bounce>
        </div>
        </article>
        <ul class="skills__menu">
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
      </section>
    </div>
  );
};
