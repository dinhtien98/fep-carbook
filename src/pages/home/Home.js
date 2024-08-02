import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div class="video">
        <div class="bg_video">
          <iframe
            src="https://www.youtube.com/embed/mp9dctTsgg0?autoplay=1&loop=1&playlist=mp9dctTsgg0&controls=0&modestbranding=1&showinfo=0&fs=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div class="container-fluid contain-main">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center header_content mx-auto">
              <h5>
                <span class="new">CarBook</span>
              </h5>
              <h1>Cùng bạn đi trên mọi nẻo đường</h1>
              <p>Đồng hành cùng bạn - tin tưởng ở bạn</p>
              <button>
                Thuê xe <span class="more"></span>
              </button>
            </div>
          </div>
        </div>
        <div class="icondown text-center header_content mx-auto">
          <a class="downclick">
            <i class="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </div>

      

      <Footer className="footer" />
    </div>
  );
}
