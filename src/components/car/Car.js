import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./car.css";
import ListCar from "./ListCar";

export default function Car() {
  const { currentPage } = useSelector(
    (state) => state.cars
  );
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <ListCar />
      </div>
    </section>
  );
}
