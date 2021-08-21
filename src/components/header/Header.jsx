import React from "react";
import "./header.css";
const Header = ({ changeUi, view, refresh}) => {
  return (
    <header>
    <nav>
      <div className="nav-wrapper">
        <a href="!#" className="brand-logo center">
          Bit People
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="about.html">About us</a>
          </li>
          <li>
            <a href="!#"><i className="medium material-icons" onClick={refresh}>refresh</i></a>
          </li>
          <li>
            <a href="!#" onClick={changeUi}> <i className="medium material-icons">{view? "grid_on" : "format_list_bulleted"}</i></a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;

