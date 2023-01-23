import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../context/GlobalContext";

import imgHero from "../assets/image/png/hero.webp";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="hero-area position-relative bg-default-1 pt-26 pt-lg-32 pb-15 pb-lg-20">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="6" md="9" className="order-lg-2">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <div className="hero-video-thumb position-relative gr-z-index-1">
                  <img src={imgHero} alt="" className="w-100 rounded-8" />
                </div>
              </div>
            </Col>
            <Col
              lg="6"
              md="9"
              className="order-lg-1 mt-9 mt-lg-0"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="hero-content ">
                <h1 className="gr-text-2 mb-9">
                    Yeni nesil yurt dışı kargo ve lojistik platformu
                </h1>
                <p className="gr-text-8 pr-5 pl-0 pr-xl-11 mb-9">
                    cargopanel hızıyla 230 farklı ülkeye kargo teklifi alın, teklifleri karşılaştırın, gönderi oluşturun ve yönetin.
                </p>
                <div className="hero-btn">
                  <Link href="//app.cargopanel.co">
                    <a className="btn-link with-icon text-primary gr-text-7 font-weight-bold">
                      Hemen Teklif Al{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
