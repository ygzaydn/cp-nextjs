import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../assets/image/png/cargopanel-e-export.webp";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-1 pb-13 pb-lg-16">
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
              <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                <h2 className="gr-text-4 mb-7">
                  E-İhracat Lojistiği
                </h2>
                <p className="gr-text-8 mb-0">
                  E-ihracat lojistik süreçlerinizi, cargopanel'in akıllı teklif panelini kullanarak
                  yönetin ve yurt dışı kargo operasyonlarınızda hız kazanın. Yurt dışı siparişinizin
                  boyut ve ağırlık bilgilerini panele girin, sunulan fiyat tekliflerini karşılaştırın
                  ve size en uygun alternatifi seçin. Uluslararası kargo süreçlerinizi tek panelden
                  güvenle yönetin.
                </p>
                <Link href="/e-ihracat-lojistigi">
                  <a className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-9">
                    Detaylar{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
