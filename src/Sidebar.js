import React from "react"; // import SidebarItem from
import "./Styles/css/Sidebar.css";
function Sidebar() {
  const activeHeader = (e, data) => {
    let activeHead = document.querySelector(".headActive");
    if (activeHead) {
      activeHead.classList.remove("headActive");
    }
    e.target.classList.add("headActive");

    if (data === "profile") {
      setContent(data);
    } else if (data === "blog") {
      openItem(data);
    }
  };

  const setContent = (e) => {
    console.log(e);
  };

  const openItem = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-links">
          <section className="sidebar-group">
            <p
              className="sidebar-heading"
              onClick={(e) => activeHeader(e, "profile")}
            >
              ✔ Profile
              <span className="arrow right"></span>
            </p>{" "}
          </section>
          <section className="sidebar-group">
            <p
              className="sidebar-heading"
              onClick={(e) => activeHeader(e, "blog")}
            >
              ✔ Blog
              <span className="arrow right"></span>
            </p>{" "}
          </section>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
