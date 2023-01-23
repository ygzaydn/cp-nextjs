import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Accordion from "../components/Accordion";
import CTA from "../sections/CTA";

const FaqPage = () => {
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
                  <h2 className="title gr-text-4 mb-9">Sıkça Sorulan Sorular</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="pb-20 pb-md-33 bg-default-1">
          <Container>
            <div className="gr-text-9">
              <Accordion title="Desi hesabı nasıl yapılır?" content="Desi hesabı, gönderinizin en x boy x yükseklik / 5000 formülü ile yapılır." />
              <Accordion title="Kargolarım adresimden toplanabiliyor mu?" content="Evet. İstanbul içi hizmet bölgelerimiz dahilinde toplama gerçekleştiren kuryelerimiz ile depomuza gönderim sağlayabilirsiniz. Ayrıca kurye hizmetimizin yanı sıra çözüm ortağımız olan MNG Kargo ile de gönderinizi depomuza ücretsiz gönderebilirsiniz." />
              <Accordion title="Yurt dışı gönderimi alıcı ödemeli gönderebilir miyim?" content="Hayır. Yurt dışına yapılan gönderilerde ödeme, gönderici tarafından yapılmaktadır. Gönderiniz depomuza ulaştığında ölçümleri yapılıp sisteme bilgileri girilir. Sonrasında panelinizde ödeme ekranı açılır ve ödeme yapmanız beklenir." />
              <Accordion title="Mikro ihracat (ETGB) nedir? cargopanel ile mikro ihracat gönderimi yapılabilir mi?" content="Mikro ihracat, 300 kg ve fatura tutarı 15.000 Euro’yu aşmayan gönderilerin gümrükçü tutmadan ETGB belgesi ile gönderilmesidir. cargopanel üzerinden gönderim türünü “Mikro İhracat” olarak seçtiğiniz taktirde bu hizmet ile gönderim yapabilirsiniz. Ürün yurt dışı edildikten sonra hazırlanan ETGB belgesi e-posta adresinize iletilir. Bu belge ile KDV iadesine başvurabilirsiniz." />
              <Accordion title="Gönderimi oluşturdum. Şimdi ne yapmam gerekiyor?" content="Gönderinizi oluşturduktan sonra ilgili gönderinin detaylarında bulunan “Kargo Etiketi Yazdır” butonundan etiketinizi çıkartarak paket üzerine yapıştırıp depomuza ücretsiz bir şekilde gönderebilirsiniz. (Sisteme yüklediğiniz diğer tüm belgelerin çıktısı depo personellerimiz tarafından alınır.)" />
              {/*<Accordion title="" content="" />*/}
            </div>
          </Container>
        </div>
      </PageWrapper>
      <CTA />
    </>
  );
};
export default FaqPage;
