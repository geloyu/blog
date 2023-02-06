import React from "react";
import "../Styles/css/Contents.css";
import image from "../Styles/images/back.jpg";

function Home() {
  return (
    <>
      <div className="content">
        <img className="home_image" src={image} alt="profile"></img>
        <p className="home_title">Tech Record by Gelo</p>
        <p className="home_subtitle">
          [Author] : HoHyeon (Email : bbirds94@gmail.com)
        </p>
      </div>
    </>
  );
}

export default Home;
