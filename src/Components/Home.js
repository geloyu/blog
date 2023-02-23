import React from "react";
import "../Styles/css/Contents.css";
import image from "../Styles/images/back.gif";

function Home() {
  return (
    <>
      <div className="home_content">
        <img className="home_image" src={image} alt="profile"></img>
        <p className="home_subtitle">
          <i style={{ fontSize: "50px" }}>Tech Record by Gelo</i>
          <br />
          [Author] : HoHyeon (Email : bbirds94@gmail.com)
        </p>
      </div>
    </>
  );
}

export default Home;
