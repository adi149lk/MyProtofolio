import React from "react";
import Card from "../Card/Card";
import "./Project.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".slider", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",
      },
    });
  });
  return (
    <div id="project">
      <h1 id="para"> 2+ EXPERIENCE IN PROJECTS </h1>
      <div className="slider">
        <Card title={"VIRTUAL ASSISTANT"} img={"image/va.png"} />
        <Card title={"AI POWERED FITNESS"} img={"image/fw.png"} />
        <Card title={"AI CHAT BOT"} img={"image/cb.png"} />
        <Card title={"AI IMAGE REMOVER"} img={"image/br.png"} />
        <Card title={"IMAGE SEARCH ENGINE"} img={"image/ise.png"} />
      </div>
    </div>
  );
};

export default Project;
