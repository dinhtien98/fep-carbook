import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sliceShow.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/carsSlice";
import { Link } from "react-router-dom";

export default function SliceShow() {
  const { items, status } = useSelector(state => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "start" || items.length === 0) {
      dispatch(fetchData(1));
    }
  }, [dispatch, status, items.length]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error loading data.</p>;
  }

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide className="text-center" key={item.id}>
            <div className="car">
              <img
                src={`${process.env.PUBLIC_URL}/img/${item.image}.jpg`}
                style={{ width: "300px", height: "170px" }}
                alt={item.name}
              />
              <div className="text-center dnamecar">
                <h2 className="mb-0">
                  <a href="#" className="namecar">
                    {item.name}
                  </a>
                </h2>
                <div className="d-flex mb-3">
                  <span className="cat">Giá thuê</span>
                  <p className="price ml-auto">
                    ${item.price} <span>/ngày</span>
                  </p>
                </div>
                <p className="d-flex mb-0 d-block">
                  <a href="#" className="btn btn-warning py-2 mr-1">
                    Đặt xe
                  </a>{" "}
                  <Link to={`/carsingle/${item.id}`} className="btn btn-secondary py-2 ml-1">Thông tin</Link>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
