import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchDataAll, setCurrentPage } from "../../redux/carsSlice";
import AOS from "aos";
import "aos/dist/aos.css";
import "./car.css";
import ListCar from "./ListCar";
import Pagination from "./Pagination";

export default function Car() {
  const { status, totalPages, currentPage } = useSelector(
    (state) => state.cars
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAll());
  }, []);

  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <ListCar />
        {status === "succeeded" && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => dispatch(setCurrentPage(page))}
          />
        )}
      </div>
    </section>
  );
}
