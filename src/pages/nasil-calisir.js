import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/CTA";

import howItWorks1 from "../assets/image/png/howItWorks1.webp";
import howItWorks2 from "../assets/image/png/howItWorks2.webp";
import howItWorks3 from "../assets/image/png/howItWorks3.webp";
import howItWorks4 from "../assets/image/png/howItWorks4.webp";
import howItWorks5 from "../assets/image/png/howItWorks5.png";

const howItWorksPage= () => {
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
              <Col lg="9" xl="8">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-4 mb-9">Nasıl Çalışır?</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-5 pb-md-21 bg-default-1">
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
                  <img className="main-img w-100" src={howItWorks1} alt="" />
                </div>
              </Col>
              <Col sm="10" lg="5" className="order-lg-1">
                <div className="content-text">
                  <h4 className="pre-title gr-text-8 text-primary mb-6">
                    ADIM 1
                  </h4>
                  <h2 className="gr-text-4 mb-7">
                    Gönderi Bilgilerini Girin
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Paket türünü (zarf, koli, sandık, palet), teslim alınacak ülkeyi, varış ülkesini, kargo bilgilerini girin ve “İleri” diyerek yurt dışı kargo tekliflerini listeleyin.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-5 pb-md-21 bg-default-1">
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
                  src={howItWorks2}
                  alt=""
                  className="main-img mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                <h4 className="pre-title gr-text-8 text-primary mb-6">
                  ADIM 2
                </h4>
                <h2 className="gr-text-4 mb-7">
                  Teklifleri Karşılaştırın ve Size En Uygun Teklifi Seçin
                </h2>
                <p className="gr-text-8 mb-0">
                  Sunulan yurt dışı kargo tekliflerini karşılaştırın ve size en uygun alternatifi seçin. Tekliflerin yanın bulunan "Seç" butonu ile teklifinizi seçerek sonraki adıma geçebilirsiniz.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pb-5 pb-md-21 bg-default-1">
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
                  <img className="main-img w-100" src={howItWorks3} alt="" />
                </div>
              </Col>
              <Col sm="10" lg="5" className="order-lg-1">
                <div className="content-text">
                  <h4 className="pre-title gr-text-8 text-primary mb-6">
                    ADIM 3
                  </h4>
                  <h2 className="gr-text-4 mb-7">
                    Gönderi Detaylarını Girerek Gönderi Talimatı Oluşturun
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Gönderim türünüzü (hediye, numune, satış, mikro ihracat), para birimini, ilgili ürün içeriğinizi, gönderici ve alıcı bilgilerinizi girerek gönderi talimatı oluşturun.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-5 pb-md-21 bg-default-1">
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
                  src={howItWorks4}
                  alt=""
                  className="main-img mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 pl-xl-7">
                <h4 className="pre-title gr-text-8 text-primary mb-6">
                  ADIM 4
                </h4>
                <h2 className="gr-text-4 mb-7">
                  Kurye Hizmeti ile Gönderinizi Aldırın
                </h2>
                <p className="gr-text-8 mb-0">
                  Paneliniz üzerinden toplama talebi oluşturun, İstanbul içi hizmet bölgelerimiz dahilinde toplama gerçekleştiren kuryelerimiz gönderilerinizi kapınızdan alsın. Kurye hizmetinin yanında çözüm ortağımız olan MNG Kargo ile de gönderinizi depomuza ücretsiz gönderebilirsiniz.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pb-20 pb-md-21 bg-default-1">
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
                  <img className="main-img w-100" src={howItWorks5} alt="" />
                </div>
              </Col>
              <Col sm="10" lg="5" className="order-lg-1">
                <div className="content-text">
                  <h4 className="pre-title gr-text-8 text-primary mb-6">
                    ADIM 5
                  </h4>
                  <h2 className="gr-text-4 mb-7">
                    Gönderinizin Güncel Durumunu Takip Edin
                  </h2>
                  <p className="gr-text-8 mb-0">
                    Yurt dışı gönderinizin güncel durumunu ve konumunu takip edin, gönderiniz hakkında detaylı raporlar alın.
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
export default howItWorksPage;
