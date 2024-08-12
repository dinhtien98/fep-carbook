import React, { useEffect, useState } from "react";
import "./addcar.css";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addNewCar } from "../../redux/cartSlice";

export default function AddCar(props) {
  const { items } = props;
  const [show, setShow] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    car: "",
    price: "",
  });
  
  const handleClose = () => setShow(false);
  const handleShow = (car) => {
    setSelectedCar(car);
    setShow(true);
  };

  useEffect(() => {
    const loadData = localStorage.getItem("pickCar");
    if (loadData) {
      try {
        const parsedData = JSON.parse(loadData);
        setPickUpLocation(parsedData.pickUpLocation || "");
        setDropOffLocation(parsedData.dropOffLocation || "");
        setPickUpDate(parsedData.pickUpDate || "");
        setDropOffDate(parsedData.dropOffDate || "");
      } catch (error) {
        console.error("Failed to parse localStorage data:", error);
      }
    }
  }, []);

  useEffect(() => {
    setItem({
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      car: selectedCar,
      price: price
    });
    setPrice(handle_price());
  }, [pickUpLocation, dropOffLocation, pickUpDate, dropOffDate, selectedCar, price]);

  const handle_price = () => {
    const start = new Date(pickUpDate);
    const end = new Date(dropOffDate);

    const differenceInTime = end - start;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    const calculatedPrice = items.price * differenceInDays;
    if(calculatedPrice<0) return 0
    else return calculatedPrice;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!pickUpLocation || !dropOffLocation || !pickUpDate || !dropOffDate) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];

    if (pickUpDate < currentDate) {
      alert("Ngày nhận xe phải từ ngày hiện tại trở về sau.");
      return;
    }

    if (dropOffDate < pickUpDate) {
      alert("Ngày trả xe phải lớn hơn hoặc bằng ngày nhận xe.");
      return;
    }

    if (!selectedCar) {
      alert("Vui lòng chọn xe trước khi đặt xe.");
      return;
    }

    dispatch(addNewCar(item));
    alert("Xe đã được đặt!");
    handleClose();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => handleShow(items)}
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
            <form className="request-form bg-warning" onSubmit={handleSubmit}>
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
                <label htmlFor="">Tên xe</label>
                <h3>{selectedCar ? selectedCar.name : ""}</h3>
              </div>
              <div className="form-group">
                <label htmlFor="">Thành tiền</label>
                <h3>{price ? price : 0}$</h3>
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
    </>
  );
}
