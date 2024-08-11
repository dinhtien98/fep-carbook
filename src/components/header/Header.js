import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAll } from "../../redux/carsSlice";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { itemAll } = useSelector(state => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAll());
  }, [dispatch]);

  const dataCart = JSON.parse(localStorage.getItem("listPickCar"))

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0 && Array.isArray(itemAll)) {
      const filteredSuggestions = itemAll.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

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
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                <i className="fa-solid fa-bell">
                  <span className="flagNote">!</span>
                </i>
              </Link>
            </li>
          </ul>
          <div
            className={`input-group ${isNavOpen ? "d-flex" : "d-none d-lg-flex"}`}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Search for car..."
              aria-label="Search"
              aria-describedby="search-button"
              value={inputValue}
              onChange={handleInputChange}
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
            {suggestions.length > 0 && (
              <div className="dropdown-list">
                {suggestions.map((suggestion) => (
                  <Link
                    key={suggestion.id}
                    className="dropdown-item"
                    to={`/carsingle/${suggestion.id}`}
                  >
                    {suggestion.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
