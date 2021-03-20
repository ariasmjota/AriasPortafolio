import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { HamburgerArrow } from "react-animated-burgers";

export const Nav = () => {

  return (
    <div>
      <section className="navBar">
        <img
          className="navBar__logo"
          src={process.env.PUBLIC_URL + "/assets/svg/marcafinal.svg"}
          alt="Logo Maria Arias"
        ></img>

        <ul className="navBar__menu">
          <li>
            <Link className="" to={"/"}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="" to={"/about"}>
              <span>About Me</span>
            </Link>
          </li>
          <li>
            <Link className="" to={"/work"}>
              <span>My Work</span>
            </Link>
          </li>
          <li>
            <Link className="" to={"/contact"}>
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>

      </section>
    </div>
  );
};
