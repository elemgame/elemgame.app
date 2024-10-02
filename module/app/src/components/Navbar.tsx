import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="/">
            <img
              src={logo}
              alt="Elemental"
              style={{ width: "200px", height: "auto" }}
            />
          </a>

          <nav id="navbar">
            <button className="menu-toggle" onClick={toggleNav}>
              {isOpen ? (
                <i className="bi bi-x-lg"></i>
              ) : (
                <i className="bi bi-list"></i>
              )}
            </button>

            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
              <li>
                <Link className="getstarted" to="/buy-nft">
                  Buy NFT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
