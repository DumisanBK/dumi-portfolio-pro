import React from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";

function Card(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div
      className="go-to-company-webiste-container screen container fade in"
      id={props.id || ""}
    >
      <div className="parent">
        <ScreenHeading
          title={"Company Website"}
          subHeading={"Visit My Company Website"}
        />
        <div className="card">
          <h2>Hey there</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
