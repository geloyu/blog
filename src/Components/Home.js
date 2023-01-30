import React from "react";
import "../Styles/css/Contents.css";
import image from "../Styles/images/back.jpg";

function Home() {
  return (
    <>
      <div className="content">
        <p className="home_title">Tech Record by Gelo</p>
        <img className="home_image" src={image} alt="profile"></img>
        <hr className="underline"></hr>
        <p className="home_subtitle">
          [Author] : HoHyeon (Email : bbirds94@gmail.com)
        </p>
        <hr className="underline"></hr>
      </div>
    </>
  );
}

export default Home;
