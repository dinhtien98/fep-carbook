import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/carsSlice";

export default function ListCar() {
  const { item, status, totalPages, currentPage } = useSelector(
    (state) => state.cars
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [currentPage]);
  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading data.</p>}
      {status === "succeeded" &&
        item.map((item) => (
          <div
            className="col-md-6 col-lg-4 text-center"
            key={item.key}
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
                  <a href="#" className="btn btn-secondary py-2 ml-1">
                    Thông tin
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
