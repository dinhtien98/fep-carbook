import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Car<span>Book</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="ftco-nav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div
          className={`navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cars">
                Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/singup">
                Singup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <i class="fa-solid fa-user"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messenger">
                <i class="fa-solid fa-bell"></i>
              </Link>
            </li>
          </ul>
          <div
            className={`input-group ${
              isNavOpen ? "d-flex" : "d-none d-lg-flex"
            }`}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search for car..."
              aria-label="Search"
              aria-describedby="search-button"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="search-button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
