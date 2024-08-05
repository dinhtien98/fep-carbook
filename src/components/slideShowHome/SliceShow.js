import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sliceShow.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const items = [
  {
    key: 1,
    src: `${process.env.PUBLIC_URL}/img/car-1.jpg`,
    alt: "Slide 1",
  },
  {
    key: 2,
    src: `${process.env.PUBLIC_URL}/img/car-2.jpg`,
    alt: "Slide 2",
  },
  {
    key: 3,
    src: `${process.env.PUBLIC_URL}/img/car-3.jpg`,
    alt: "Slide 3",
  },
  {
    key: 4,
    src: `${process.env.PUBLIC_URL}/img/car-4.jpg`,
    alt: "Slide 4",
  },
  {
    key: 5,
    src: `${process.env.PUBLIC_URL}/img/car-5.jpg`,
    alt: "Slide 5",
  },
];

export default function SliceShow() {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
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
          <SwiperSlide className="text-center" key={item.key}>
            <div className="car">
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "300px", height: "170px" }}
              />
              <div class="text-center">
                <h2 class="mb-0">
                  <a href="#" className="namecar">
                    Mercedes Grand Sedan
                  </a>
                </h2>
                <div class="d-flex mb-3">
                  <span class="cat">Cheverolet</span>
                  <p class="price ml-auto">
                    $500 <span>/day</span>
                  </p>
                </div>
                <p class="d-flex mb-0 d-block">
                  <a href="#" class="btn btn-warning py-2 mr-1">
                    Đặt xe
                  </a>{" "}
                  <a href="#" class="btn btn-secondary py-2 ml-1">
                    Thông tin
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
