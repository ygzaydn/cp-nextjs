import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/CTA";

const TermsConditions = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-4 mb-9">
                    Çerez Politikası
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-20">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <div className="px-lg-8 px-xl-3">
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">Değerli Ziyaretçi</h3>
                    <p className="gr-text-9">
                      CARGOPANEL Teknoloji (“CARGOPANEL”) olarak internet sitemizi ziyaret ederken gizliliğiniz ve
                      güvenliğinizi temin etmek birincil önceliklerimizdendir. Bu çerçevede internet sitemizi bizimle
                      hiçbir kişisel veri paylaşmadan, CARGOPANEL ismi verilmiş Uluslararası Dijital Lojistik Platformu (“CARGOPANEL”)
                      hakkında bilgi edinebilir ve ziyaretinizi tamamlayabilirsiniz. Ziyaretlerinizde, internet sitemizi
                      ziyaret deneyiminizin ihtiyaçlarınızı karşılaması amacıyla çok sınırlı çerez türleri kullanılmaktadır.
                      Ziyaretiniz sırasında, internet tarayıcınızın ya da mobil uygulamanızın dili, bulunduğunuz saat dilimi,
                      sayfalarımızda geçirilen süre ve arama motoru optimizasyon  bilgileri vb. bilgiler elde edilmektedir.
                      Bu bilgiler aracılığıyla kimliğinizi belirleyebilmemiz mümkün değildir. Bu nedenle, bizimle iletişime
                      geçmediğiniz sürece herhangi bir kişisel verinizin işlenmeyeceğini temin ederiz.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">Çerez Nedir?</h3>
                    <p className="gr-text-9">
                      Çerez, bir internet sitesini ziyaret ettiğinizde bilgisayarınıza internet sitemizin sunucusu tarafından 
                      gönderilen basit bir metin dosyasıdır. Çerezler, size daha iyi ve daha hızlı bir ziyaret deneyimi yaşatabilmek
                      için yaygın olarak kullanılırlar.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">Hangi Tür Çerezleri Niçin Kullanıyoruz?</h3>
                    <p className="gr-text-9">
                      Öncelikle belirtmek gerekir ki geçerlilik sürelerine göre iki tür çerez vardır: Kalıcı Çerez ve Geçici Çerez.
                      Sitemizde de aşağıda belirtilen amaçlar çerçevesinde bu iki tür çerez de kullanılabilir:
                    </p>
                    <p className="gr-text-9">
                      <b>Kalıcı Çerez:</b> Tarayıcı veya uygulamayı kapattıktan sonra da bilgisayar / mobil cihazda kalan çerezlerdir. Siz silene ya da süreleri sona erene kadar kalırlar. Amaçları, internet sitesini ziyaret deneyiminizin beklenen şekilde devamı için ayarlara ilişkin tercihlerinizi hatırlamaktır.
                    </p>
                    <p className="gr-text-9">
                      <b>Geçici Çerez:</b> Ziyaretiniz sırasında oluşturulan ve ziyaretinizin sona ermesinden sonra silinen, “seans” çerezleri olarak da adlandırılan çerezlerdir.
                    </p>
                    <p className="gr-text-9">
                      Ayrıca, işlevlerine ve amaçlarına göre de çerezleri sınıflandırmak mümkündür. Bu kapsamda, çerezler, özetle aşağıdaki şekilde sınıflandırılabilir:
                    </p>
                    <ul className="list-unstyled">
                      <li className="mt-7">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          İnternet sitesinin amaçlandığı şekilde çalışabilmesi ve güvenliği temin edebilmek için kullanılan zorunlu ya da fonksiyonel çerezler,
                        </li>
                        <li className="mt-7">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          İnternet sitesini ziyaret eden kullanıcının tercihlerini (örn. internet tarayıcınızın ya da mobil uygulamanızın dili vb.) hatırlanmasını sağlayan, internet sitesi deneyiminizin beklediğiniz şekilde gerçekleşmesine yönelik işlevsellik çerezleri,
                        </li>
                        <li className="mt-7">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          İnternet sitesi kullanımına ilişkin olan, internet sitelerinin geliştirilmesi, hataların tespit edilebilmesi ve internet sitesinin doğru şekilde çalışıp çalışmadığının denetlenmesi için kullanılan ve analiz edilen, bir sayfada ne kadar süre geçirdiğiniz, hangi alt bağlantı adreslerine tıkladığınız, herhangi bir sayfada hata mesajı alıp almadığınız gibi bilgilerden oluşan performans ve analiz çerezleri,
                        </li>
                        <li className="mt-7">
                          <i
                            className="rounded-circle bg-dark d-inline-block mr-5"
                            css={`
                              width: 9px;
                              height: 9px;
                            `}
                          ></i>
                          İnternet sitesi ziyaretiniz akabinde size hedefli reklamlar yapılmasını sağlayan, internet sitesini yöneten firmanın size kişiselleştirilmiş reklamlar göstermesini sağlayan ve reklamların ne sıklıkta görüldüğü, tıklanıp tıklanmadığı, etkili olup olmadığı vb. konularda etkinliğini ölçmek ve analiz etmek için kullanılan pazarlama çerezleri.
                        </li>
                      </ul>
                      <p className="gr-text-9">
                        Görüleceği üzere, çerezler kural olarak kişisel verilerinizi toplamazlar. Ancak bazıları, internet sitesi ziyaretiniz sırasında verebileceğiniz diğer bilgiler ile eşleştiğinde kimliğinizi belirleyebilecek bilgiler sunabilir. Bu tür çerezler, aynı zamanda ilgili internet sitesinin kişisel verilerin korunması politikası ve/veya bilgilendirmelerine tabi olacaktır. Bu tamamen ilgili internet sitesinin çerez politikasına tabidir.
                      </p>
                      <p className="gr-text-9">
                        CARGOPANEL olarak, internet sitemizi ziyaretiniz sırasında kullandığımız çerezler, size ait ya da kimliğinizi belirlememizi sağlayan bir bilgiye erişmemize imkân vermemektedir. Dolayısıyla, çerez politikamız kapsamında kişisel verileriniz toplanmamaktadır.
                      </p>
                      <p className="gr-text-9">
                        CARGOPANEL tarafından tasarlanmış çerezlerin yanı sıra üçüncü kişilerden alınan hizmetler kapsamında çerez kullanılabilir. Ancak üçüncü kişiler tarafından kullanılacak çerezlerin de yalnızca yukarıda belirtilen amaçlar için kullanılabileceğini temin ederiz. Üçüncü taraflarca kullanılacak çerezler aracılığıyla da kişisel verileriniz toplanmayacaktır.
                      </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">Çerezler Nasıl Toplanır?</h3>
                    <p className="gr-text-9">
                      Çerezler, internet sitemize ve uygulamamıza eriştiğiniz cihazlarınız aracılığıyla toplanır. Toplanan bu bilgiler cihazlarınıza özeldir. İnternet sitemizi başka bir cihazdan ziyaret ettiğinizde, daha önceki ziyaretiniz sırasında toplanan çerezler kullanılamayacaktır.
                    </p>
                  </div>
                  <div className="single-block">
                    <h3 className="gr-text-8 font-weight-bold pb-3">Çerez Tercihlerinizi Nasıl Değiştirebilirsiniz?</h3>
                    <p className="gr-text-9">
                      Çerezleri dilediğiniz gibi kontrol edebilir, toplanmasını/kaydedilmesini engelleyebilirsiniz veya toplanmış olması halinde silebilirsiniz. Çoğu internet tarayıcısı ve mobil cihaz buna imkân vermektedir. Bunu nasıl yapabileceğiniz her tarayıcı ve mobil cihaz için farklılık gösterebilir. Gerekli bilgi ve yönlendirmelere tarayıcınızın ve mobil cihazınızın ayarlar bölümünden ulaşabilirsiniz. Çerezleri silmeyi tercih ederseniz kalıcı çerezler silinecektir. Çerezleri tamamen engellemeyi tercih ederseniz bu fonksiyonel çerezlerin çalışmasını da engelleyebilir. Dolayısıyla, internet sitemiz doğru ve etkin şekilde çalışmayabilir.
                    </p>
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
export default TermsConditions;
