import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = ({ changeUi, view, refresh}) => {
  return (
    <header>
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">
          Bit People
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {/* <a href="about.html">About us</a> */}
            <Link to='/about/'>About us</Link>
          </li>
          <li>
            <a href="!#"><i className="medium material-icons" onClick={refresh}>refresh</i></a>
          </li>
          <li>
            <a href="!#" onClick={changeUi}> <i className="medium material-icons">{view? "view_module" : "view_list"}</i></a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;

