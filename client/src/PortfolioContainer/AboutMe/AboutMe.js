import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I am Full Stack Developer specialising in different programming languages i.e C#, JavaScript, and PHP just to mention a few. I am currently working at NBS Bank PLC as a Software Developer and specialize in developing Web Applications, APIs and integrating our applications with other 3rd party service providers including water bills, electricity bills, tv and more.The logical extension of my education and work experience is my continued desire to create and re-purpose software to be sleek and powerful. I have an avid desire to code power Apps in languages like JavaScript, C#, Dart and Flutter, React, and more with a view toward making elegant full-stack solutions in application development. ",
    highlights: {
      bullets: [
        "Full Stack Web and Mobile development",
        "Interactive Front End as per design",
        "Software Tool development",
        "Building REST API",
        "Graphic Designing",
        "WordPress Development",
      ],
      heading: "Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <b>
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </b>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="Dumisani_B_Kaunda_Resume.pdf"
                download="Dumie Brown Kaunda Dumisani_B_Kaunda_Resume.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
