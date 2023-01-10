import React from "react";
import "./Styles/css/Header.css";
import profile from "./Styles/images/profile.png";

function Header() {
  return (
    <>
      <div className="header">
        <div>
          <img className="headerImage" src={profile} alt="profile"></img>
          <span className="headerName">TECH RECORD</span>
        </div>
      </div>
    </>
  );
}

export default Header;
