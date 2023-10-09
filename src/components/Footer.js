import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div>
          Design & Develop by{" "}
          <a
            href="https://www.linkedin.com/in/talha-eser-900a4a1b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talha Eser
          </a>{" "}
          <span> © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
