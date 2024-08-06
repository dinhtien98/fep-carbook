import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FormBookCar() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="row no-gutters">
      <div className="col-md-12 featured-top">
        <div className="row no-gutters">
          <div className="col-xl-4 d-flex align-items-center" data-aos="fade-up-right">
            <form action="#" className="request-form bg-warning">
              <h2>Thông tin thuê xe</h2>
              <div className="form-group">
                <label htmlFor="" className="label">
                  Địa điểm nhận
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="192/5 phú thọ hòa - tân phú - HCM"
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="label">
                  Địa điểm trả
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="192/5 phú thọ hòa - tân phú - HCM"
                />
              </div>
              <div className="d-flex">
                <div className="form-group pick-up-date">
                  <label htmlFor="" className="label">
                    Ngày nhận
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="book_pick_date"
                  />
                </div>
                <div className="form-group pick-drop-date">
                  <label htmlFor="" className="label">
                    Ngày trả
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="book_off_date"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Tìm xe"
                  className="btn btn-secondary py-3 px-4"
                />
              </div>
            </form>
          </div>
          <div className="col-xl-8 d-flex align-items-center" data-aos="fade-up-left">
            <div className="services-wrap rounded-right w-100">
              <h3 className="heading-section mb-4">Cách thức thuê xe</h3>
              <div className="row d-flex mb-4">
                <div className="col-12 col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                    </div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Lựa chọn địa điểm</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i className="fa-solid fa-handshake"></i>
                      </span>
                    </div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Lựa chọn xe</h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i className="fa-solid fa-car"></i>
                      </span>
                    </div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Đặt xe</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
