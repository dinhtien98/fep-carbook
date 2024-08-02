import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Car<span>Book</span></a>
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

        <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="about.html" className="nav-link">Cars</a></li>
            <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="car.html" className="nav-link">About</a></li>
            <li className="nav-item"><a href="login.html" className="nav-link">Login</a></li>
            <li className="nav-item"><a href="register.html" className="nav-link">Signup</a></li>
            <li className="nav-item"><a href="profile.html" className="nav-link"><i class="fa-solid fa-user"></i></a></li>
			<li className="nav-item"><a href="profile.html" className="nav-link"><i class="fa-solid fa-cart-shopping"></i></a></li>
          </ul>
          <div className={`input-group ${isNavOpen ? 'd-flex' : 'd-none d-lg-flex'}`}>
            <input type="text" className="form-control" placeholder="Search for car..." aria-label="Search" aria-describedby="search-button"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
