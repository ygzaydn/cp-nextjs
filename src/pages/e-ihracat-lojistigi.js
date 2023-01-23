import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/CTA";

import pageImage1 from "../assets/image/png/cargopanel-e-export.webp";
import pageImage2 from "../assets/image/png/cargopanel-payment.webp";
import pageImage3 from "../assets/image/png/cargopanel-document.webp";
import pageImage4 from "../assets/image/png/howItWorks5.png";

const FeaturesPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-md-11 bg-default-1">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col lg="10" xl="10">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-4 mb-9">E-İhracat Lojistiği</h2>
                  <p className="gr-text-8 mb-13">
                    Uluslararası pazar yerleri üzerinden yurt dışına satış yapan işletmelerin, girişimcilerin e-ihracat lojistik süreçlerinde benzersiz avantajlarla uçtan uca hizmet sunuyoruz.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-13 pb-lg-21 bg-default-1">
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
                  <img className="main-img w-100" src={pageImage1} alt="" />
                </div>
              </Col>
              <Col sm="10" lg="5" className="order-lg-1">
                <div className="content-text">
                  <h2 className="gr-text-4 mb-7">
                    E-İhracat Lojistik Süreciniz için Avantajlı Teklifler
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Yurt dışı kargo bilgilerinizi, cargopanel'in akıllı teklif paneline girerek
                    saniyeler içinde çoklu fiyat teklifi alabilir, teklifleri karşılaştırabilir
                    ve size en uygun alternatifi seçerek gönderi oluşturabilirsiniz. Böylece
                    zamandan tasaruf eder, e-ihracat lojistik sürecinizi tek panelden güvenle 
                    yönetebilirsiniz.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-13 pb-lg-21 bg-default-1">
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
                  src={pageImage2}
                  alt=""
                  className="main-img mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                <h2 className="gr-text-4 mb-7">
                  Güvenilir Ödeme Seçenekleri
                </h2>
                <p className="gr-text-8 mb-0">
                  Ödemenizi tercihinize göre banka havalesi, kredi kartı, Papara veya Payoneer ile tamamlayabilirsiniz.
                  Uygun ve güvenilir alternatiflerle ilerleyerek ödeme bölümünü dert etmeden yurt dışı kargo sürecinizi
                  yönetebilirsiniz.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pb-13 pb-lg-21 bg-default-1">
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
                  <img className="main-img w-100" src={pageImage3} alt="" />
                </div>
              </Col>
              <Col sm="10" lg="5" className="order-lg-1">
                <div className="content-text">
                  <h2 className="gr-text-4 mb-7">
                    Otomatik Belge Sistemi
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Yurt dışı gönderilerinize ait gümrüklere sunulacak belgeler cargopanel tarafından
                    otomatik olarak oluşturulur. Bu sayede her belgenin çıktısını almak zorunda kalmaz,
                    zamandan tasaruf ederek, işinizi güvenle büyütebilirsiniz. Gerektiğinde ise ETGB, MSDS,
                    FDA ve TSCA gibi evrakları kolaylıkla panelinize yükleyebilirsiniz.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-20 pb-lg-21 bg-default-1">
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
                  src={pageImage4}
                  alt=""
                  className="main-img mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                <h2 className="gr-text-4 mb-7">
                  Anlık Kargo Takip Sistemi
                </h2>
                <p className="gr-text-8 mb-0">
                  Yurt dışı gönderinizin durumunu ve konumunu paneliniz üzerinden takip edebilir, detaylı raporlar alabilirsiniz.
                  Ayrıca yurt dışı siparişlerinizin hareketini takip ederek teslim tarihini öğrebilir, zamanında teslimat
                  sayesinde alıcılarınızın güvenini kazanabilirsiniz.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </PageWrapper>
      <CTA />
    </>
  );
};
export default FeaturesPage;
