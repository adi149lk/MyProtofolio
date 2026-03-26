import React from "react";
import "./About.css";
import Card from "../Card/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".aboutdetails h1", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".aboutdetails ul", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".rightabout", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",
      },
    });
  });
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personaldetails">
            <h1>PERSONAL DETAILS</h1>
            <ul>
              <li>
                <span>NAME</span>:ADITYA NARAYAN PANDA
              </li>
              <li>
                <span>AGE</span>:22 YEARS
              </li>
              <li>
                <span>GENDER</span>:MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span>:HINDI ,ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span>:MCA
              </li>

              <li>
                <span>CGPA</span>:8.71(1st)
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN WEB DEVELOPMENT</li>
              <li>DSA with C</li>
              <li>JAVA , CPP</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title={"MERN STACK DEVELOPER"} img={"image/mern.png"} />
        <Card title={"JAVA,C++"} img={"image/cj.png"} />
        <Card title={"DSA"} img={"image/dsa.png"} />
      </div>
    </div>
  );
};

export default About;
