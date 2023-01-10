import React from "react"; // import SidebarItem from
import "./Styles/css/Sidebar.css";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul class="sidebar-links">
          <li>
            <section class="sidebar-group collapsable depth-0">
              <p class="sidebar-heading">
                <span>📌 Category 1</span> <span class="arrow right"></span>
              </p>{" "}
            </section>
          </li>
          <li>
            <section class="sidebar-group collapsable depth-0">
              <p class="sidebar-heading">
                <span>📌 Category 2</span> <span class="arrow right"></span>
              </p>{" "}
            </section>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
