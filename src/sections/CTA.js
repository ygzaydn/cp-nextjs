import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section pt-10 pt-lg-15 pb-10 pb-lg-15 bg-primary bg-pattern pattern-7">
          <Container>
              <Row className="justify-content-center">
                  <Col md="10" lg="10" xl="10">
                      <div className="text-center dark-mode-texts">
                          <h2 className="gr-text-4 mb-3">
                              İlk gönderinizi beraber gerçekleştirelim!
                          </h2>
                          <p className="gr-text-9 mb-11 px-xl-7 gr-text-color">
                              7/24 destek, online ödeme, gönderi takip
                          </p>
                          <Link href="//app.cargopanel.co">
                              <a className="btn btn-white gr-hover-y px-lg-9">
                                  Hemen Teklif Al
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

export default CTA;