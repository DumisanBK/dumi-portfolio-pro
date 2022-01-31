import React, { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../assets/images/mailz.jpeg";
import load1 from "../../assets/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./ContactMe.css";

import axios from "axios";
import { toast } from "react-toastify";
import FooterArrow from "../FooterArrow/FooterArrow";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);

      const res = await axios.post(`http://localhost:5000/contact`, data);

      console.log(res.data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Get in touch with me ✉",
                1000,
                "Get your job done ✅",
                1000,
              ]}
            />
          </h2>{" "}
          <a href="https://www.facebook.com/multicsystech">
            <i className="fa fa-facebook-square"></i>
          </a>{" "}
          <a href="https://www.instagram.com/dumisanbkaunda/">
            <i className="fa fa-instagram"></i>
          </a>{" "}
          <a href="https://www.linkedin.com/in/dumisani-brown-kaunda-427292121/">
            <i className="fa fa-linkedin-square"></i>
          </a>{" "}
          <a href="https://www.multicsystems.com/">
            <i className="fa fa-globe"></i>
          </a>
        </div>
        <h4>Hey there</h4>
        <div className="back-form">
          <div className="img-back">
            <img src={imgBack} alt=" not found" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              label="name"
              type="text"
              onChange={handleName}
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input
              label="email"
              type="email"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              label="message"
              type="text"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt=" not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterArrow />
    </div>
  );
}
