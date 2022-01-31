import React from "react";
import Profile from "./Profile/Profile";
import "./Home.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Card from "../Card/Card";

function Home(props) {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
