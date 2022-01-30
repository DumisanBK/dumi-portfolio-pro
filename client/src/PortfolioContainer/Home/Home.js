import React from "react";
import Profile from "./Profile/Profile";
import "./Home.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FooterArrow from "../FooterArrow/FooterArrow";

function Home(props) {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />

      <FooterArrow />
    </div>
  );
}

export default Home;
