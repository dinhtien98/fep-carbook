import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function FormBookCar() {
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const formData = {
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
    };
    localStorage.setItem("pickCar", JSON.stringify(formData));
  }, [pickUpLocation, dropOffLocation, pickUpDate, dropOffDate]);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const carId = localStorage.getItem("carId");

    if (!carId) {
      alert("Vui lòng chọn xe trước khi đặt xe."); 
      return;
    }
    localStorage.removeItem("pickcar");
  };

  return (
    <div className="row no-gutters">
      <div className="col-md-12 featured-top">
        <div className="row no-gutters">
          <div
            className="col-xl-4 d-flex align-items-center"
            data-aos="fade-up-right"
          >
            <form onSubmit={handleSubmit} className="request-form bg-warning">
              <h2>Thông tin thuê xe</h2>
              <div className="form-group">
                <label htmlFor="" className="label">
                  Địa điểm nhận
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập vào địa chỉ"
                  value={pickUpLocation}
                  onChange={(e) => setPickUpLocation(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="label">
                  Địa điểm trả
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập vào địa chỉ"
                  value={dropOffLocation}
                  onChange={(e) => setDropOffLocation(e.target.value)}
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
                    value={pickUpDate}
                    onChange={(e) => setPickUpDate(e.target.value)}
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
                    value={dropOffDate}
                    onChange={(e) => setDropOffDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <Link to={`/cars`} className="btn btn-secondary py-2 ml-1">
                  Chọn xe
                </Link>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Đặt xe"
                  className="btn btn-secondary py-3 px-4"
                />
              </div>
            </form>
          </div>
          <div
            className="col-xl-8 d-flex align-items-center"
            data-aos="fade-up-left"
          >
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
