import React from "react";
import Search from "../../components/Search";
import logo from "../../logo.svg";
import "./index.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-wrap">
          <a href="http" className="header-link-logo">
            <img src={logo} alt="logo" className="header-logo" />
          </a>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;