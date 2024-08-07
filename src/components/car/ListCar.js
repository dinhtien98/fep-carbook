import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/carsSlice";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function ListCar() {
  const [selectedSeats, setSelectedSeats] = useState(""); 
  const { items, status, currentPage } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [dispatch, currentPage]);

  const handleSelectChange = (event) => {
    setSelectedSeats(event.target.value);
  };


  const filteredItems = selectedSeats
    ? items.filter((item) => item.seats === parseInt(selectedSeats, 10))
    : items;

  return (
    <>
      <Form.Select className="w-30" onChange={handleSelectChange} value={selectedSeats}>
        <option value="">Tất cả loại xe</option>
        <option value="2">2 chỗ ngồi</option>
        <option value="4">4 chỗ ngồi</option>
        <option value="6">6 chỗ ngồi</option>
      </Form.Select>
      <div className="row">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error loading data.</p>}
        {status === "succeeded" &&
          filteredItems.map((item) => (
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
                    <a href="#" className="namecar">
                      {item.name}
                    </a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Giá</span>
                    <p className="price ml-auto">
                      ${item.price} <span>/ngày</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-warning py-2 mr-1">
                      Đặt xe
                    </a>{" "}
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
    </>
  );
}
