import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import "./carsingle.css";
import SliceShow from "../../components/slideShowHome/SliceShow";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchDataId } from "../../redux/carsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Carsingle() {
  const { id } = useParams();
  const { item } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataId(id));
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  const bgimage1 = `${process.env.PUBLIC_URL}/img/${item.image}.jpg`;
  console.log(item);
  return (
    <>
      <Header />
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: `url(${bgimage1})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row no-gutters slider-text slider-text1 js-fullheight align-items-end justify-content-start">
            <div className="col-md-9 ftco-animate textlistcar pb-5">
              <p className="breadcrumbs d-flex text-left">
                <span className="mr-2">
                  <Link className="nav-link" to="/">
                    Home<i className="fa-solid fa-angle-right"></i>
                  </Link>
                </span>
                <span>Cars Details</span>
              </p>
              <h1 className="mb-3 bread">Thông tin chi tiết</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section ftco-car-details">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="car-details">
                <div class="img rounded">
                  <div className="carousel-container">
                    <Swiper
                      spaceBetween={40}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={false}
                      modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      {item.imageDetail &&
                      Array.isArray(item.imageDetail) &&
                      item.imageDetail.length > 0 ? (
                        item.imageDetail.map((imageName, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={`${process.env.PUBLIC_URL}/img/${imageName}.jpg`}
                              alt={`Slide ${index}`}
                              style={{ width: "80%" }}
                            />
                          </SwiperSlide>
                        ))
                      ) : (
                        <SwiperSlide>
                          <p>No images available</p>
                        </SwiperSlide>
                      )}
                    </Swiper>
                  </div>
                </div>
                <div class="text text-center">
                  <span class="subheading">Thông số kỹ thuật</span>
                  <h1>{item.name}</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services">
                <div class="media-body py-md-4">
                  <div class="d-flex mb-3 align-items-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i class="fa-solid fa-gauge"></i>
                      </span>
                    </div>
                    <div class="text">
                      <h3 class="heading mb-0 pl-3">Mileage</h3>
                      <span>40,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services">
                <div class="media-body py-md-4">
                  <div class="d-flex mb-3 align-items-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i class="fa-solid fa-gears"></i>
                      </span>
                    </div>
                    <div class="text">
                      <h3 class="heading mb-0 pl-3">Transmission</h3>
                      <span>Manual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services">
                <div class="media-body py-md-4">
                  <div class="d-flex mb-3 align-items-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i class="fa-solid fa-couch"></i>
                      </span>
                    </div>
                    <div class="text">
                      <h3 class="heading mb-0 pl-3">Seats</h3>
                      <span>{item.seats} Adults</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services">
                <div class="media-body py-md-4">
                  <div class="d-flex mb-3 align-items-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i class="fa-solid fa-suitcase-rolling"></i>
                      </span>
                    </div>
                    <div class="text">
                      <h3 class="heading mb-0 pl-3">Luggage</h3>
                      <span>4 Bags</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md d-flex align-self-stretch ftco-animate">
              <div class="media block-6 services">
                <div class="media-body py-md-4">
                  <div class="d-flex mb-3 align-items-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span>
                        <i class="fa-solid fa-gas-pump"></i>
                      </span>
                    </div>
                    <div class="text">
                      <h3 class="heading mb-0 pl-3">Fuel</h3>
                      <span>Petrol</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 pills">
              <div class="bd-example bd-example-tabs">
                <div class="d-flex justify-content-center">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <h1>Features</h1>
                    </li>
                  </ul>
                </div>

                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-description"
                    role="tabpanel"
                    aria-labelledby="pills-description-tab"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <ul class="features">
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Airconditions
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Child Seat
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            GPS
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Luggage
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Music
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <ul class="features">
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Seat Belt
                          </li>
                          <li class="remove">
                            <span>
                              <i class="fa-solid fa-xmark"></i>
                            </span>
                            Sleeping Bed
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Water
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Bluetooth
                          </li>
                          <li class="remove">
                            <span>
                              <i class="fa-solid fa-xmark"></i>
                            </span>
                            Onboard computer
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <ul class="features">
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Audio input
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Long Term Trips
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Car Kit
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Remote central locking
                          </li>
                          <li class="check">
                            <span>
                              <i class="fa-solid fa-check"></i>
                            </span>
                            Climate control
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">Lựa chọn khác</span>
              <h2 className="mb-2 showcar">
                Xe được khách hàng yêu thích nhiều
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <SliceShow />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
