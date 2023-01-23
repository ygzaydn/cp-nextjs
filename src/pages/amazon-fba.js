import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/CTA";

import pageImage1 from "../assets/image/png/cargopanel-amazon-fba.webp";
import pageImage2 from "../assets/image/png/cargopanel-additional-services.webp";

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
                  <h2 className="title gr-text-4 mb-9">Amazon FBA Hizmeti</h2>
                  <p className="gr-text-8 mb-13">
                    Amazon'da satış yapan işletmelerin, girişimcilerin Amazon FBA süreçlerini onlar adına biz yönetiyor, benzersiz avantajlarla uçtan uca hizmet sunuyoruz.
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
                    Benzersiz Avantajlar ile Amazon FBA Hizmeti
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Express servislerimizi kullanarak Amazon FBA gönderilerinizi hızlı ve güvenli bir şekilde
                    tüm Amazon depolarına gönderebilirsiniz. Ayrıca talep ederseniz, FBA gönderileriniz için
                    sunmuş olduğumuz benzersiz avantajlardanda yararlanabilirsiniz.
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
                  src={pageImage2}
                  alt=""
                  className="main-img mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                <h2 className="gr-text-4 mb-7">
                  Avantajlı Ek Hizmetler
                </h2>
                <p className="gr-text-8 mb-0">
                  Amazon FBA lojistik süreçleriniz için sunulan avantajlı ek hizmetlerden faydalanın.
                  cargopanel, e-ihracat lojistik operasyonunuz için ürün paketlemenizi, etiketlemenizi
                  ve dahasını deneyimli ekibi ile üstleniyor. Sizede sadece FBA planlamanızı yapmak kalıyor.
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
      </PageWrapper>
      <CTA />
    </>
  );
};
export default FeaturesPage;
