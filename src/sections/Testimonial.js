import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgT1 from "../assets/image/testimonial/testimonial_ft.jpg";

const Testimonials = () => {
  return (
    <>
      {/* <!-- Testimonials Area --> */}
      <div className="testimonial-section pb-lg-21 pt-12 pb-8 ">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-11 mb-lg-14">
                <h2 className="title gr-text-4 mb-6">
                  Müşteri Hikayeleri
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col lg="4" md="6" className="mb-20 mb-lg-9">
              <div className="card rounded-10 border p-9 h-100">
                <div className="customer-img circle-sm-2 mb-9 mb-lg-14">
                  <img src={imgT1} alt="" className="w-100 rounded-circle" />
                </div>
                <p className="review-text gr-text-7 text-blackish-blue mb-7 mb-lg-8">
                  “cargopanel ile çalışarak tüm Amazon gönderilerimizi daha hızlı,
                  daha kolay ve daha uygun fiyatlar ile gönderiyoruz.”
                </p>
                <div className="customer-identity align-items-center mt-auto">
                  <h3 className="name gr-text-9 mb-2 mb-md-0 mr-3 text-blackish-blue">
                    Furkan Tedik
                  </h3>
                  <p className="rank gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                    Amazon Satıcısı
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;