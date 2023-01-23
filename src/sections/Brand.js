import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import imgB1 from "../assets/image/png/ups.png";
import imgB2 from "../assets/image/png/fedex.png";
import imgB3 from "../assets/image/png/tnt-express.png";
import imgB4 from "../assets/image/png/mng-kargo.png";

const Brand = () => (
  <>
    {/* <!-- Brand section --> */}
    <div className="brand-section pt-11 pb-9 pb-lg-21 bg-default-1 ">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="10" lg="9" xl="8">
            <div className="section-title text-center mb-7 mb-lg-11">
              <h2 className="title gr-text-4 mb-9">Çözüm Ortaklarımız</h2>
            </div>
          </Col>
          <Col xs="12" md="11" lg="10" xl="9">
            <div className="brand-logos d-flex justify-content-center align-items-center mx-n9 flex-wrap">
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="500"
              >
                <img src={imgB1} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="700"
              >
                <img src={imgB2} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="900"
              >
                <img src={imgB3} alt="" className="w-100" />
              </div>
              <div
                className="single-brand mx-9 py-7 gr-opacity-8"
                data-aos="zoom-in-right"
                data-aos-duration="1100"
              >
                <img src={imgB4} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Brand;