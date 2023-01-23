import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/CTA";

const AboutPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-29 pb-md-11">
              <Col lg="10" xl="10">
                <div className="px-md-12 text-center mb-20 mb-lg-24">
                  <h2 className="title gr-text-4 mb-9 mb-lg-12">Hakkımızda</h2>
                  <p className="gr-text-8 mb-10">
                    Uluslararası lojistik hizmetlerini dijitalleştirerek verimleştirmeyi hedefleyen,
                    sunmuş olduğu girişimci dostu çözümleri ile alanında Türkiye'nin öncü markalarından
                    olan cargopanel, bir arkadaş grubunun uluslararası lojistik alanında yaşanılan çeşitli
                    problemleri tartışması üzerine ve ardından alanında uzman bir ekibin temellerini atması
                    ile hayata geçmiş teknoloji merkezli bir lojistik platformudur.
                  </p>
                  <p className="gr-text-8 mb-0">
                    Uzun bir saha araştırmasının ardından ihtiyacı ölçekleyen cargopanel, yapmış olduğu yoğun
                    çalışma ve çeşitli anlaşmaları ile 8 ayın sonunda hizmet vermeye başlamıştır. Yazılım odaklı
                    bir yaklaşım ve büyüme stratejisi benimseyen cargopanel, yazılım ekibini güçlü tutmaya,
                    müşterilerin ihtiyaçlarını dinleyerek yeni özellikler eklemeye ve geliştirmeler yapmaya
                    büyük önem vermektedir.
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
export default AboutPage;
