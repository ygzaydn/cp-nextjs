import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

const Alert = () => {
  return (
    <>
      {/* <!-- Alert Area --> */}
      <div className="alert-section py-6 bg-primary dark-mode-texts">
        <Container>
          <Row className="justify-content-center">
            <Col xl="7" lg="8" md="9">
              <div className="alert-content d-flex flex-column flex-lg-row align-items-center text-center justify-content-lg-center">
                <span className="btn-badge rounded bg-white gr-text-12 text-uppercase font-weight-bold text-blue py-1 px-6 mr-5 mb-6 mb-lg-0 d-inline-flex align-items-center">
                  Duyuru
                </span>
                <span className="alert-text gr-text-9 text-white">
                  Kampanyalarımızı Kaçırmayın!{" "}
                  <Link href="//app.cargopanel.co">
                    <a className="btn-link with-icon text-white gr-text-9 font-weight-bold ml-5">
                      Hemen Teklif Al{" "}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Alert;
