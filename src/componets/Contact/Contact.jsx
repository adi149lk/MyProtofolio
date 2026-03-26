import React from "react";
import "./Contact.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".rightcontact form", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightcontact form",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",
      },
    });
  });
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src="image/contact.png" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xreobzja" method="POST">
          <input type="text" name="Username" placeholder="Name" />
          <input type="email" name="Email" placeholder="email" />
          <textarea
            name="message"
            id="textarea"
            placeholder="message me"
          ></textarea>
          <input type="submit" id="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
