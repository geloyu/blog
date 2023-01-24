import React from "react"; // import SidebarItem from
import "./Styles/css/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const activeHeader = (e) => {
     let activeHead = document.querySelector(".headActive");
     if (activeHead) {
       activeHead.classList.remove("headActive");
     }

     let activeSub = document.querySelector(".subAcitve");
     if (activeSub) {
      activeSub.classList.remove("subAcitve");
     }

     e.target.classList.add("headActive");

     let subMenu = e.target.nextSibling;

     if(subMenu.classList.contains('display')) {
       e.target.nextSibling.classList.remove('display');
     } else {
      e.target.nextSibling.classList.add('display');
     }

  };

  const activeSubMenu = (e) => {
    let activeSub = document.querySelector(".subAcitve");
     if (activeSub) {
      activeSub.classList.remove("subAcitve");
     }
     e.target.classList.add("subAcitve");
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-links">
          <nav className="sidebar-group">
            <div className="sidebar-wrap">
                {/* <Link to="cs" className="sidebar-heading" onClick={activeHeader}>✔ ComputerSience</Link> */}
                <div className="sidebar-heading" onClick={activeHeader}>✔ ComputerSience</div>
                <ul className="sidebar-submenu-wrap">
                    <li className="sidebar-submenu" onClick={activeSubMenu}>ComputerSienceItem1</li>
                    <li className="sidebar-submenu" onClick={activeSubMenu}>ComputerSienceItem2</li>
                </ul>
            </div>
              <li className="sidebar-heading" onClick={activeHeader}>
                <Link to="be">✔ Back-End</Link>
              </li>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
