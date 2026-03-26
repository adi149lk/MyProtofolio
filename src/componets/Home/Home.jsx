import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">ADITYA PANDA</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                900,

                "MCA STUDENT",
                700,
                "WEB DEVELOPER",
                700,

                "SOFTWARE DEVELOPER",
                700,
              ]}
              speed={500}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src="image/man.png" />
      </div>
    </div>
  );
};

export default Home;
