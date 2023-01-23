import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/CTA";

const Contact = () => {
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
                  <h2 className="title gr-text-4 mb-9">İletişim</h2>
                  <p className="gr-text-8 mb-13">
                    Yurt dışı gönderilerinizde karşılaşabileceğiniz her türlü soru ve sorunda
                    uzman destek ekibimizden yardım alabilirsiniz.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-20 pb-md-33 bg-default-1">
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="mb-9">
                <Row>
                  <Col md="5" lg="4" className="mb-10">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                        <i className="icon icon-phone-2"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5">Destek Hattımız</h3>
                        <a
                        className={`gr-text-7 text-primary`}
                        href="tel:+908503091591"
                        >
                        0850 309 15 91
                        </a><br/>
                        <a
                        className={`gr-text-7 text-primary`}
                        href="tel:+905392516093"
                        >
                        0539 251 60 93
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md="5" lg="4" className="mb-10">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                        <i className="icon icon-email-83"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5">E-Posta</h3>
                        <p className="gr-text-7 mb-0">
                          info@cargopanel.co
                          muhasebe@cargopanel.co
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="5" lg="4">
                    <div className="single-contact-widget d-flex">
                      <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                        <i className="icon icon-pin-3-2"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="gr-text-6 mb-5">Merkez Ofisimiz</h3>
                        <p className="gr-text-7 mb-0">
                          Bahçelievler, İstanbul/Türkiye
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
      <CTA />
    </>
  );
};
export default Contact;
