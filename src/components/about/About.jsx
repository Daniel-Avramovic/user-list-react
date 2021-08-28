import React from "react";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <a className="brand-logo" href="#/">
                BIT People
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        <h1>About</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3>What we do</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">© 2021 Copyright BIT Student Daniel Avramovic</div>
        </div>
      </footer>
    </Fragment>
  );
};

export default About;
