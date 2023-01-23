import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../assets/image/png/cargopanel-additional-services.webp";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-1 pb-13 pb-lg-21">
        <Container>
          <Row className="align-items-center justify-content-center">
          <Col sm="10" lg="7">
              <div
                className="content-img pr-9"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  src={imgC1}
                  alt=""
                  className="main-img mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pr-lg-7">
                <h2 className="gr-text-4 mb-8">
                  Avantajlı Ek Hizmetler
                </h2>
                <p className="gr-text-8 mb-0">
                  E-ihracat lojistik süreçleriniz için sunulan avantajlı ek hizmetlerden faydalanın.
                  cargopanel, talep ederseniz e-ihracat lojistik operasyonunuz için ürün paketlemenizi,
                  etiketlemenizi ve dahasını deneyimli ekibi ile üstleniyor. Sizede sadece FBA planlamanızı
                  yapmak kalıyor.{" "}
                </p>
                <div className="content-widget mt-8">
                  <Row>
                    <Col md="9">
                      <div className="single-widget d-flex align-items-center py-2">
                        <div className="widget-icon text-primary mr-6 gr-text-8 d-flex align-items-center">
                          <i className="icon icon-check-simple"></i>
                        </div>
                        <h3 className="w-title gr-text-8 mb-0">
                          FNSKU Etiketleme
                        </h3>
                      </div>
                    </Col>
                    <Col md="9">
                      <div className="single-widget d-flex align-items-center py-2">
                        <div className="widget-icon text-primary mr-6 gr-text-8 d-flex align-items-center">
                          <i className="icon icon-check-simple"></i>
                        </div>
                        <h3 className="w-title gr-text-8 mb-0">
                          Koruyucu Malzeme
                        </h3>
                      </div>
                    </Col>
                    <Col md="9">
                      <div className="single-widget d-flex align-items-center py-2">
                        <div className="widget-icon text-primary mr-6 gr-text-8 d-flex align-items-center">
                          <i className="icon icon-check-simple"></i>
                        </div>
                        <h3 className="w-title gr-text-8 mb-0">
                          Pazarlama ve Promosyon Ekleri
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
