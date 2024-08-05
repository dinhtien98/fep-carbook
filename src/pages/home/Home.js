import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./home.css";
import SlideShow from "../../components/slideShowHome/SliceShow";
import FormBookCar from "../../components/formBookCar/FormBookCar";

const bgimage1 = `${process.env.PUBLIC_URL}/img/bg_1.jpg`;
const bgimage2 = `${process.env.PUBLIC_URL}/img/bg_3.jpg`;

export default function Home() {
  return (
    <div>
      <Header />
      <div
        className="hero-wrap ftco-degree-bg"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: `url(${bgimage1})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
            <div className="col-lg-8 ftco-animate">
              <div className="text w-100 text-center mb-md-5 pb-md-5">
                <h1 className="mb-4">Cùng bạn đến muôn nơi</h1>
                <p>
                  Dịch vụ cho thuê xe ô tô mang đến sự tiện lợi và giá rẻ cho
                  mọi nhà
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pt bg-light">
        <div className="container">
          <FormBookCar />
        </div>
      </section>

      <section class="ftco-section ftco-no-pt bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 heading-section text-center ftco-animate mb-5">
              <span class="subheading">Chọn xe thuê</span>
              <h2 class="mb-2 showcar">Xe được khách hàng yêu thích nhiều</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <SlideShow />
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-about">
        <div class="container">
          <div class="row no-gutters">
            <div
              class="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${bgimage2})` }}
            ></div>
            <div class="col-md-6 wrap-about ftco-animate">
              <div class="heading-section heading-section-white pl-md-5">
                <span class="subheading">Thông tin về công ty</span>
                <h2 class="mb-4">Chào mừng bạn đến với Carbook</h2>

                <p>
                  Chúng tôi rất vui và hạnh phúc khi nhận được sự quan tâm của
                  quý khách hàng
                </p>
                <p>
                  CarBook là công ty hàng đầu trong lĩnh vực cho thuê xe ô tô
                  tại Việt Nam, nổi bật với dịch vụ chuyên nghiệp và đa dạng.
                  Chúng tôi cung cấp một loạt các dòng xe từ những mẫu xe sang
                  trọng đến những lựa chọn tiết kiệm, đáp ứng mọi nhu cầu của
                  khách hàng. Với đội ngũ nhân viên tận tâm và hệ thống quản lý
                  hiện đại, CarBook cam kết mang đến trải nghiệm thuê xe an
                  toàn, tiện lợi và linh hoạt nhất. Dịch vụ của chúng tôi không
                  chỉ giúp khách hàng tiết kiệm thời gian mà còn mang lại sự
                  thoải mái và hài lòng tối đa trong mỗi hành trình. Hãy để
                  CarBook đồng hành cùng bạn trên mọi nẻo đường!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
