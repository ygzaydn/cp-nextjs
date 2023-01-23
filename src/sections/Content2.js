import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import imgC1 from "../assets/image/png/cargopanel-amazon-fba.webp";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-1 pb-13 pb-lg-21">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              sm="10"
              lg="6"
              className="offset-xl-1  order-lg-2 mb-9 mb-lg-0"
            >
              <div
                className="double-image-group-opacity"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img className="main-img w-100" src={imgC1} alt="" />
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h2 className="gr-text-4 mb-7">
                  Benzersiz Avantajlar ile Amazon FBA Hizmeti
                </h2>
                <p className="gr-text-8 mb-0">
                  Express servislerimizi kullanarak Amazon FBA gönderilerinizi hızlı ve güvenli bir şekilde
                  tüm Amazon depolarına gönderebilirsiniz. Ayrıca talep ederseniz, FBA gönderileriniz için
                  sunmuş olduğumuz benzersiz avantajlardanda yararlanabilirsiniz.
                </p>
                <Link href="/amazon-fba">
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
