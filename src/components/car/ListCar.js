import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { fetchDataAll, setCurrentPage } from "../../redux/carsSlice";
import Pagination from "./Pagination";
import "./car.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AOS from "aos";
import "aos/dist/aos.css";
import { addNewCar } from "../../redux/cartSlice";
import AddCar from "../addCar/AddCar";

export default function ListCar() {
  const [selectedSeats, setSelectedSeats] = useState("");
  const { itemAll, status, currentPage, totalPages } = useSelector(
    (state) => state.cars
  );
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    dispatch(fetchDataAll());
  }, [dispatch]);

  const handleSelectChange = (event) => {
    setSelectedSeats(event.target.value);
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const filteredItems = selectedSeats
    ? itemAll.filter((item) => item.seats === parseInt(selectedSeats, 10))
    : itemAll;

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Form.Select
        className="w-30"
        onChange={handleSelectChange}
        value={selectedSeats}
      >
        <option value="">Tất cả loại xe</option>
        <option value="2">2 chỗ ngồi</option>
        <option value="4">4 chỗ ngồi</option>
        <option value="6">6 chỗ ngồi</option>
      </Form.Select>
      <div className="row">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error loading data.</p>}
        {status === "succeeded" &&
          currentItems.map((item) => (
            <div
              className="col-md-6 col-lg-4 text-center"
              key={item.id}
              data-aos="fade-up"
            >
              <div className="car my-2">
                <div className="imgcar">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/${item.image}.jpg`}
                    alt={item.name}
                    style={{ width: "75%", height: "170px" }}
                    className="carimg"
                  />
                </div>

                <div className="text-center dnamecar">
                  <h2 className="mb-0">
                    <a className="namecar">{item.name}</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Giá</span>
                    <p className="price ml-auto">
                      ${item.price} <span>/ngày</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <AddCar items={item} />
                    <Link
                      to={`/carsingle/${item.id}`}
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Thông tin
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
