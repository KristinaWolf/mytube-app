import React from "react";
import Menu from "../../components/Menu";
import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Menu />
      </nav>
    </div>
  );
};

export default Sidebar;