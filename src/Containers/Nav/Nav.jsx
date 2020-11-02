import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
<Link className="" to={'/'}>
<a >
  <i className="fas fa-user-astronaut"></i>
  <span>Home</span>
</a>
</Link>
</li>
<li>
<Link className="" to={'/about'}>
<a>
  <i className="fas fa-user-astronaut"></i>
  <span>About Me</span>
</a>
</Link>
</li>
<li>
<Link className="" to={'/'}>
<a>
  <i className="fas fa-briefcase"></i>
  <span>My Work</span>
</a>
</Link>
</li>
<li>
<Link className="" to={'/'}>
<a>
  <i className=" fas fa-mail-bulk"></i>
  <span>Contact Me</span>
</a>
</Link>
</li>
</ul>
</section>
</div>
  );
}