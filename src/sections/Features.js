import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import iconF1 from "../assets/image/svg/l4-feature-icon1.svg";

const Features = () => {
  return (
    <>
      {/* <!-- Fearures Area --> */}
      <div className="feature-section bg-default-1 pt-15 pt-lg-21 pb-9 pb-md-0 pb-lg-21">
        <Container>
          <Row className="justify-content-center">
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="500"
              >
                <div className="widget-icon mr-8">
                  <img src={iconF1} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 font-weight-bold mb-6">
                    Hızlı Teklif ve Karşılaştırma
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Birçok servis arasından size en uygun olanı seçerek gönderi oluşturabilir, zamandan tasaruf ederek işlerinizi güvenle büyütebilirsiniz.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1000"
              >
                <div className="widget-icon mr-8">
                  <img src={iconF1} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 font-weight-bold mb-6">
                    Online Ödeme ve Takip
                  </h3>
                  <p className="gr-text-9 mb-0">
                    Güvenilir ödeme seçenekleri ile online olarak ödemenizi yapabilir,
                    paneliniz üzerinden gönderinizin durumunu anlık olarak takip edebilirsiniz.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
              <div
                className="feature-widget media"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="1500"
              >
                <div className="widget-icon mr-8">
                  <img src={iconF1} alt="" />
                </div>
                <div className="widget-texts">
                  <h3 className="title gr-text-7 font-weight-bold mb-6">
                    Avantajlı Ek Hizmetler
                  </h3>
                  <p className="gr-text-9 mb-0">
                    E-ihracat lojistik süreçleriniz için sunulan paketleme, etiketleme gibi avantajlı ek hizmetlerden faydalanarak iş yükünüzü azaltabilirsiniz.
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
export default Features;
