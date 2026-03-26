import React, { useRef } from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  let humburger = useRef();
  let mobile = useRef();
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from("nav  h1", {
      y: -100,
      duration: 1,
      opacity: 0,
    });
    t1.from("nav ul li ", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
  });
  return (
    <nav className="nav">
      <h1>PORTFOLIO</h1>
      <ul id="desktopMenu">
        <Link
          to="home"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>About</li>
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>Projects</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <div
        className="humburger"
        ref={humburger}
        onClick={() => {
          mobile.current.classList.toggle("activemobile");
          humburger.current.classList.toggle("activehum");
        }}
      >
        <div className="hum"></div>
        <div className="hum"></div>
        <div className="hum"></div>
      </div>
      <ul className="mobileMenu" ref={mobile}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>About</li>
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>Projects</li>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          activeClass="active"
          spy={true}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
