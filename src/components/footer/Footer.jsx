import React from "react";
import LastUpdate from "../lastUpdate/LastUpdate";
import "./footer.css";

export const Footer = ({ update }) => {
  return (
    // <footer>
    //   <div className="container flex">
    //     <p>Copyrigth &copy; BIT Student Daniel Avramovic 2021</p>
    //     <LastUpdate update={update} />
    //   </div>
    // </footer>
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container flex">
          <p>© 2021 Copyright BIT Student Daniel Avramovic</p>
          <LastUpdate update={update} />
        </div>
      </div>
    </footer>
  );
};
