import React from "react";
import LastUpdate from "../lastUpdate/LastUpdate";
import "./footer.css";

export const Footer = ({ update }) => {
  return (
    <footer>
      <div className="container flex">
        <p>Copyrigth &copy; BIT Student Daniel Avramovic 2021</p>
        <LastUpdate update={update} />
      </div>
    </footer>
  );
};
