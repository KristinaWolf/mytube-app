import React from "react";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdQueueMusic,
  MdSportsEsports,
  MdSurfing,
  MdCameraRoll,
} from "react-icons/md";
import "./index.scss";

const Menu = () => {
  return (
    <div className="menu__list">
      <Link to="/" className="menu__link">
        <MdHome size={23} />
        <span className="menu__span">Home</span>
      </Link>
      <Link to="/music" className="menu__link">
        <MdQueueMusic size={23} />
        <span className="menu__span">Music</span>
      </Link>
      <Link to="/films" className="menu__link">
        <MdCameraRoll size={23} />
        <span className="menu__span">Films</span>
      </Link>
      <Link to="/sport" className="menu__link">
        <MdSurfing size={23} />
        <span className="menu__span">Sport</span>
      </Link>
      <Link to="/videogames" className="menu__link">
        <MdSportsEsports size={23} />
        <span className="menu__span">Video games</span>
      </Link>
    </div>
  );
};

export default Menu;
