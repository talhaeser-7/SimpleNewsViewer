import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TrFlag from "./../assets/images/turkey.png";
import EnFlag from "./../assets/images/en.png";
import Logo from "./../assets/images/logo.png";
import "./component.css"; 

const Header = () => {
  const { t, i18n } = useTranslation();
  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark`}>
      <NavLink className="nav-link" to="/">
        {" "}
        <img src={Logo} alt="en flag" width="60px" loading="lazy" />{" "}
        <span className="sr-only"> </span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <NavLink className="nav-link nav-element" to="/">
              {" "}
              {t("Dashboard")} {" "}
            </NavLink>
          </li>
          
          <li className="nav-item active">
            <NavLink className="nav-link nav-element" to="/economy">
            {" "} {t("Economy")}{" "}
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link nav-element" to="/sport">
            {" "}{t("Sport")}{" "}
            </NavLink>
          </li>
        </ul>

        {i18n.language.includes("tr") ? (
          <ul>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                onClick={(e) => e.preventDefault()}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>TR</span>{" "}
                <img
                  src={TrFlag}
                  alt="tr flag"
                  className="flag"
                  loading="lazy"
                />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div
                  className="language-part"
                  onClick={() => clickHandle("en")}
                >
                  <span style={{ color: "black" }}>EN</span>
                  <img
                    src={EnFlag}
                    alt="en flag"
                    className="flag"
                    loading="lazy"
                  />
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>EN</span>{" "}
                <img
                  src={EnFlag}
                  alt="en flag"
                  className="flag"
                  loading="lazy"
                />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div
                  className="language-part"
                  onClick={() => clickHandle("tr")}
                >
                  <span style={{ color: "black" }}>TR</span>
                  <img
                    src={TrFlag}
                    alt="tr flag"
                    className="flag"
                    loading="lazy"
                  />
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
