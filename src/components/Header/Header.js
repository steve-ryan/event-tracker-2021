import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "@reach/router";
import { Button } from "./Button";
import Logo from "../../logo/logo.png";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return {
      //   window.removeEventListener('resize', showButton)
    };
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} className="logo" />
            <a href="">
              <small className="logo">EventTracker</small>
            </a>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
           
            <li className="nav-item classic">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item classic">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About App
              </Link>
            </li>
            
            <li className="nav-btn">
              {button ? (
                <Link to="/login" className="btn-link">
                  <Button buttonStyle="btn--outline ">Login</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--account">Sign up</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button
                    buttonStyle="btn--account"
                    buttonSize="btn--mobile"
                    onClick={closeMobileMenu}
                  >
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
