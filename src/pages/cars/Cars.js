import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./cars.css";
import Car from "../../components/car/Car";

const bgimage1 = `${process.env.PUBLIC_URL}/img/bg_3.jpg`;


export default function Cars() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: `url(${bgimage1})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row no-gutters slider-text slider-text1 js-fullheight align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate textlistcar pb-5">
              <p className="breadcrumbs d-flex text-left">
                <span className="mr-2">
                  <Link className="nav-link" to="/">
                    Home<i className="fa-solid fa-angle-right"></i> 
                  </Link>
                </span>
                <span>
                  Cars 
                </span>
              </p>
              <h1 className="mb-3 bread">Danh sách xe</h1>
            </div>
          </div>
        </div>
      </section>
      <Car/>
      <Footer />
    </div>
  );
}
