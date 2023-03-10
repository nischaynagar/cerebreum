import React, { useState } from "react";
import "./style.css";
import { ReactComponent as Menu } from "../assests/images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../assests/images/icon-close.svg";
import whitepaper from "../assests/Whitepaper.pdf";
import Logo from "../assests/images/Logo.svg";

export default function Navbar() {
  const [menu, setmenu] = useState(false);

  function toggleIcon() {
    const primaryNav = document.querySelector(".primary-navigation");
    const primaryHeader = document.querySelector(".primary-header");
    const primaryButton = document.querySelector(".toggleDisplay");
    if (menu) {
      setmenu(false);
    } else {
      setmenu(true);
    }
    primaryNav.toggleAttribute("data-visible");
    primaryButton.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
  }

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="primary-header">
        <div className="container mobile-width">
          <div className="nav-wrapper" id="nav-wrapper">
            <div className="logo">
              <a href="#home" onClick={(e) => handleClick(e, "home")}>
                <img src={Logo} alt="Manage" />
              </a>
            </div>
            {menu ? (
              <button
                onClick={toggleIcon}
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
                aria-expanded="false"
              >
                <CloseIcon className="icon-close" aria-hidden="true" />
                {/* <MenuIcon className="icon-hamburger" aria-hidden="true" /> */}
                <span className="visually-hidden">Menu</span>
              </button>
            ) : (
              <button
                onClick={toggleIcon}
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
                aria-expanded="false"
              >
                {/* <CloseIcon className="icon-close" aria-hidden="true" /> */}
                <Menu className="icon-hamburger" aria-hidden="true" />
                <span className="visually-hidden">Menu</span>
              </button>
            )}
            <nav className="primary-navigation">
              <ul
                className="nav-list"
                aria-label="Primary"
                id="primary-navigation"
              >
                <li>
                  <a
                    href="#howitworks"
                    onClick={(e) => handleClick(e, "howItWorksSection")}
                  >
                    How&nbsp;it&nbsp;works
                  </a>
                </li>
                <li>
                  <a
                    href="#tokenomics"
                    onClick={(e) => handleClick(e, "tokenomicsWrapper")}
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a href="https://cerebreum-staking.netlify.app" target="_blank">Staking</a>
                </li>
                <li>
                  <a download={"whitepaper"} href={whitepaper}>Whitepaper</a>
                </li>
                <li className="toggleDisplay">
                  <a href="mailto:info@cerebreum.io" className="button">Contact&nbsp;us</a>
                </li>
              </ul>
            </nav>
            <a href="mailto:info@cerebreum.io" className="button display-sm-hidden display-md-inline-flex">
              Contact&nbsp;us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
