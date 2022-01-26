import React from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import "./Home.css";
import Header from "./Header/Header";

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
