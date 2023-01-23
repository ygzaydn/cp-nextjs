import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <Container>
          <div className="footer-top pt-14 pt-lg-25 pb-lg-19">
            <Row>
              <Col xs="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Şirket</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/hakkimizda">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>Hakkımızda</a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/iletisim">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>
                          İletişim
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/sss">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>SSS</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Hizmetlerimiz</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/e-ihracat-lojistigi">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>E-İhracat Lojistiği</a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/amazon-fba">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>Amazon FBA</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">Sözleşmeler</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <Link href="/kvkk">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>
                          KVKK Aydınlatma Metni
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/hizmet-sozlesmesi">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>
                          Hizmet Sözleşmesi
                        </a>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link href="/cerez-politikasi">
                        <a className={`gr-text-9 gr-text-color gr-hover-text-blue`}>
                          Çerez Politikası
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6" lg="3">
                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-7">İletişim</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <a
                        className={`gr-text-9 font-weight-bold active text-primary`}
                        href="mailto:info@cargopanel.co"
                      >
                        info@cargopanel.co
                      </a>
                    </li>
                    <li className="py-2">
                      <a
                        className={`gr-text-9 font-weight-bold active text-primary`}
                        href="tel:+908503091591"
                      >
                        0850 309 15 91
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-footer mb-13 mb-lg-9">
                  <p className="footer-title gr-text-11 mb-5">Kargo Anlaşma Numaraları</p>
                  <ul className="footer-list list-unstyled">
                    <li className="py-2">
                      <p className="gr-text-9 mb-0 hover-text-primary">
                        <b>MNG Kargo:</b> 756878757
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="copyright-area border-top py-9">
            <Row className="align-items-center">
              <Col lg="6">
                <p
                  className={`copyright-text gr-text-11 mb-6 mb-lg-0 text-center text-lg-left gr-text-color`}
                >
                  ©2023 CARGOPANEL. Tüm Hakları Saklıdır.
                </p>
              </Col>
              <Col lg="6" className="text-center text-lg-right">
                <ul className="social-icons list-unstyled mb-0">
                  <li className="ml-7">
                    <Link href="//www.instagram.com/cargopanel">
                      <a className="gr-text-color gr-hover-text-blue">
                        <i className="icon icon-instant-camera-2"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="//twitter.com/cargopanel">
                      <a className="gr-text-color gr-hover-text-blue">
                        <i className="icon icon-logo-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li className="ml-7">
                    <Link href="//www.linkedin.com/company/cargopanel">
                      <a className="gr-text-color gr-hover-text-blue">
                        <i className="icon icon-logo-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
