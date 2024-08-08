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

export default function ListCar() {
  const [selectedSeats, setSelectedSeats] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const { itemAll, status, currentPage, totalPages } = useSelector(
    (state) => state.cars
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [item,setItem] = useState({pickUpLocation:"",dropOffLocation:"",pickUpDate:"",dropOffDate:"",car:""})

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    const savedData = localStorage.getItem("pickCar");
    if (savedData) {
      const { pickUpLocation, dropOffLocation, pickUpDate, dropOffDate } =
        JSON.parse(savedData);
      setPickUpLocation(pickUpLocation || "");
      setDropOffLocation(dropOffLocation || "");
      setPickUpDate(pickUpDate || "");
      setDropOffDate(dropOffDate || "");
    }
  }, []);

  useEffect(() => {
    dispatch(fetchDataAll());
  }, [dispatch]);

  const handleSelectChange = (event) => {
    setSelectedSeats(event.target.value);
    dispatch(setCurrentPage(1));
  };

  const handleClose = () => setShow(false);
  const handleShow = (car) => {
    setSelectedCar(car);
    setShow(true);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewCar(item))
    alert("Xe đã được đặt!");
    handleClose();
  };

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
                    <Button
                      variant="primary"
                      onClick={() => handleShow(item)}
                      className="btn btn-warning py-2 mr-1"
                    >
                      Đặt xe
                    </Button>
                    <Offcanvas
                      show={show}
                      onHide={handleClose}
                      scroll={false}
                      backdrop={false}
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Thông tin đặt xe</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <div className="d-flex align-items-center">
                          <form
                            className="request-form bg-warning"
                            onSubmit={handleSubmit}
                          >
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
                                onChange={(e) =>
                                  (setPickUpLocation(e.target.value),setItem({pickUpLocation:e.target.value,dropOffLocation:dropOffLocation,pickUpDate:pickUpDate,dropOffDate:dropOffDate,car:selectedCar}))
                                }
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
                                onChange={(e) =>
                                  (setDropOffLocation(e.target.value),setItem({pickUpLocation:pickUpLocation,dropOffLocation:e.target.value,pickUpDate:pickUpDate,dropOffDate:dropOffDate,car:selectedCar}))
                                }
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
                                  onChange={(e) =>
                                    (setPickUpDate(e.target.value),setItem({pickUpLocation:pickUpLocation,dropOffLocation:dropOffLocation,pickUpDate:e.target.value,dropOffDate:dropOffDate,car:selectedCar}))
                                  }
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
                                  onChange={(e) =>
                                    (setDropOffDate(e.target.value),setItem({pickUpLocation:pickUpLocation,dropOffLocation:dropOffLocation,pickUpDate:pickUpDate,dropOffDate:e.target.value,car:selectedCar}))
                                  }
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="">Tên xe</label>
                              <h3>{selectedCar ? selectedCar.name : ""}</h3>
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
                      </Offcanvas.Body>
                    </Offcanvas>
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
