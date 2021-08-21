import React from "react";
import "./header.css";
const Header = ({ changeUi, view }) => {
  return (
    <header>
    <nav>
      <div class="nav-wrapper">
        <a href="!#" class="brand-logo center">
          Bit People
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
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

