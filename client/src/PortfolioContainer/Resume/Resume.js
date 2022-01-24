import React, { useState } from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";

function Resume(props) {
  const [selectedBulletIndex, setSelectecIndex] = useState(0);
  const [carouselOffStyle, setcarouselOffStyle] = useState({});
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"My Formal Overview Details"}
        />
      </div>
    </div>
  );
}

export default Resume;
