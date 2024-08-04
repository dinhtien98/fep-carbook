import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">
                <a href="#" className="logo">
                  Car<span>book</span>
                </a>
              </h2>
              <p>
                Bạn muốn đi đâu - chúng tôi cùng bạn đến đó!<br/>
                chúng tôi muốn mang đến những phút giây trong chuyến đi của bạn luôn thoải mái nhất!
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                    <span><i class="fa-brands fa-twitter"></i></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span><i class="fa-brands fa-facebook"></i></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span><i class="fa-brands fa-instagram"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Term and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Best Price Guarantee
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Privacy &amp; Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Customer Support</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Payment Option
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Booking Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Question?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"><i class="fa-solid fa-location-dot"></i></span>
                    <span className="text">192/5 phú thọ hòa - tân phú - HCM</span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone"><i class="fa-solid fa-phone"></i></span>
                      <span className="text">(+84)377547885</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope"><i class="fa-solid fa-envelope"></i></span>
                      <span className="text">ngodinhtien98@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Copyright &copy; dinhtien98</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
