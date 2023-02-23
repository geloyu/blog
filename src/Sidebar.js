import React from "react"; // import SidebarItem from
import "./Styles/css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  // 큰 카테고리 이벤트
  const activeHeader = (e) => {
    let activeHead = document.querySelector(".headActive");
    if (activeHead) {
      activeHead.classList.remove("headActive");
    }

    let activeSub = document.querySelector(".subAcitve");
    if (activeSub) {
      activeSub.classList.remove("subAcitve");
    }

    let subDisplay = document.querySelector(".display");
    if (subDisplay) {
      subDisplay.classList.remove("display");
    }

    e.target.classList.add("headActive");
    e.target.nextSibling.classList.add("display");
  };

  // 작은 카테고리 이벤트
  const activeSubMenu = (e) => {
    let activeSub = document.querySelector(".subAcitve");
    if (activeSub) {
      activeSub.classList.remove("subAcitve");
    }
    e.target.parentNode.classList.add("subAcitve");
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-links">
          <nav className="sidebar-group">
            {/* ComputerSience */}
            <div className="sidebar-wrap">
              <div className="sidebar-heading" onClick={activeHeader}>
                ComputerSience
              </div>
              <ul className="sidebar-submenu-wrap">
                <li className="sidebar-submenu">
                  <Link to="computer-sience/browser" onClick={activeSubMenu}>
                    웹 브라우저 🌐
                  </Link>
                </li>

                <li className="sidebar-submenu">
                  <Link to="computer-sience/oop" onClick={activeSubMenu}>
                    객체지향 🪢
                  </Link>
                </li>

                <li className="sidebar-submenu">
                  <Link to="computer-sience/rest" onClick={activeSubMenu}>
                    REST API 📻
                  </Link>
                </li>
              </ul>
            </div>

            {/* BackEnd */}
            <div className="sidebar-wrap">
              <div className="sidebar-heading" onClick={activeHeader}>
                Back-End
              </div>
              <ul className="sidebar-submenu-wrap">
                <li className="sidebar-submenu">
                  <Link to="back-end/spring" onClick={activeSubMenu}>
                    스프링 🍃
                  </Link>
                </li>
                <li className="sidebar-submenu">
                  <Link to="back-end/springbatch" onClick={activeSubMenu}>
                    스프링 배치 🍃
                  </Link>
                </li>
                <li className="sidebar-submenu">
                  <Link to="back-end/transaction" onClick={activeSubMenu}>
                    Transaction 🍃
                  </Link>
                </li>
                <li className="sidebar-submenu">
                  <Link to="back-end/db-rdbms" onClick={activeSubMenu}>
                    RDBMS 📰
                  </Link>
                </li>
                <li className="sidebar-submenu">
                  <Link to="back-end/db-jpa" onClick={activeSubMenu}>
                    JPA 📰
                  </Link>
                </li>
              </ul>
            </div>

            {/* Language */}
            <div className="sidebar-wrap">
              <div className="sidebar-heading" onClick={activeHeader}>
                Language
              </div>
              <ul className="sidebar-submenu-wrap">
                <li className="sidebar-submenu">
                  <Link to="java/exception" onClick={activeSubMenu}>
                    JAVA - 예외처리 🦖
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
