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
                    KVKK Aydınlatma Metni
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
                    <p className="gr-text-9">
                      KVK (Kişisel Verilerin Korunması)
                    </p>
                    <h3 className="gr-text-8 font-weight-bold pb-3">Değerli Ziyaretçi</h3>
                    <p className="gr-text-9">
                      CARGOPANEL Teknoloji (“CARGOPANEL”) olarak veri sorumlusu sıfatıyla, CARGOPANEL
                      ismi vermiş olduğumuz Uluslararası Dijital Lojistik Platformu (“CARGOPANEL”) ile ilgilendiğiniz
                      için teşekkür ederiz. CARGOPANEL olarak kişisel verilerinizin gizliliğine ve güvenliğine
                      önem veriyoruz. Bu kapsamda, internet sitemiz aracılığıyla işlenen kişisel verilerinize
                      ilişkin sizi 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) kapsamında
                      bilgilendirmek isteriz.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-5">
                      Ne Tür Kişisel Verilerinizi İşliyoruz?
                    </h3>
                    <p className="gr-text-9 pb-5">
                      Bu Aydınlatma Metni kapsamında Kişisel Veri internet sitemiz ya da diğer iletişim
                      kanallarımız (telefon numaramız ve e-posta adresimiz) aracılığıyla bize iletebileceğiniz
                      ad-soyadınız, telefon numaranız, e-posta adresiniz, firma/kurum bilgileriniz ve
                      tarafımıza iletebileceğiniz mesaj içerisinde yer alabilecek diğer kişisel verilerinizi
                      kapsamaktadır.
                    </p>
                    <p className="gr-text-9">
                      İnternet sitemiz ya da diğer iletişim kanallarımız aracılığıyla bizimle herhangi bir 
                      bilgi paylaşmasanız dahi internet sitemizi ziyaretiniz sırasında elde edilebilecek diğer
                      veriler için çerez politikamıza bakabilirsiniz. Şimdiden belirtebiliriz ki çerez
                      politikamız uyarınca, yalnızca internet sitemizi ziyaret deneyimizin ihtiyaçlarınızı
                      karşılaması amacıyla çok sınırlı çerez türleri kullanılmaktadır. Ziyaretiniz sırasında,
                      internet tarayıcınızın dili, bulunduğunuz saat dilimi, sayfalarımızda geçirilen süre ve
                      arama motoru optimizasyon bilgileri vb. bilgiler elde edilmektedir. Bu bilgiler
                      aracılığıyla kimliğinizi belirleyebilmemiz mümkün değildir. Bu nedenle, bizimle
                      iletişime geçmediğiniz sürece herhangi bir kişisel verinizin işlenmeyeceğini temin ederiz.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-5">
                      Kişisel Verilerinizi Hangi Amaçlarla ve Hukuki Sebeplerle İşliyoruz?
                    </h3>
                    <p className="gr-text-9 pb-5">
                      İletişim kanalları aracılığıyla bizimle iletişime geçmeniz halinde kişisel verileriniz,
                      iletişim talepleriniz ve mesajlarınız, CARGOPANEL’i kullanmaya başlamadan önce CARGOPANEL
                      hakkında bilgi elde etmeye yönelik ise sizlere cevap verilebilmemiz amacıyla ve Kanun m.
                      5/2 (c) düzenlemesi uyarınca işleme faaliyetinin “bir sözleşmenin kurulması veya ifasıyla
                      doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin
                      işlenmesinin gerekli olması” hukuki sebebine dayanarak açık rızanıza ihtiyaç bulunmadan
                      işlenmektedir,
                    </p>
                    <p className="gr-text-9">
                      CARGOPANEL ile ilgili olmayan diğer tüm iletişim talepleriniz ve mesajlarınız ise sizlere
                      cevap verilebilmemiz amacıyla ve Kanun m. 5/2 (f) düzenlemesi uyarınca temel hak ve
                      özgürlüklerinize zarar vermemek kaydıyla işleme faaliyetinin “meşru menfaatlerimiz için zorunlu
                      olması hukuki sebebine dayanarak açık rızanıza ihtiyaç bulunmadan işlenmektedir,
                    </p>
                    <p className="gr-text-9">
                      CARGOPANEL olarak daha iyi hizmet üretebilmek, e-ihracatın önündeki engelleri en aza indirmek
                      hedefleriyle geliştirdiğimiz CARGOPANEL dijital lojistik platformunun ve bu kapsamda sizlere sunmayı
                      hedeflediğimiz diğer hizmetlerimizin (hava ekspres kargo, depolama ve diğer gönderi hizmetleri) en
                      etkin şekilde gerçekleşebilmesi için, meşru menfaatimiz kapsamında, temel hak özgürlüklerinize zarar
                      vermeyecek ve aleyhinize hiçbir sonuç doğurmayacak şekilde, iletişim taleplerinizin ve mesajlarınızın
                      doğru ve zamanında cevap verilmesini temin etmek, hizmetlerimizin mevzuata ve CARGOPANEL standartlarına
                      uygunluğunun denetlenmesi, taleplerinize ve mesajlarınıza ilişkin yanıtlara ulaşabilmeniz için gerekli
                      görevlendirmelerin yapılabilmesi, taleplerinizin ve mesajlarınızın kimliğinizden bağımsız olarak geri
                      bildirimler olarak değerlendirilmesi ve analiz edilmesi, bu analizler sonucunda elde edilen anonim
                      verilerin siz potansiyel müşterilerimize verilecek hizmetlerimizin iyileştirilmesi, CARGOPANEL’in
                      taleplerinizi daha iyi karşılayabilecek şekilde sürekli geliştirilmesi ve ücret politikalarımızın
                      belirlenmesi için kullanılması amaçlarıyla da kişisel verilerinizi işlememiz mümkün olabilir. Bu
                      paragrafta belirtilen amaçlar için adınız, soyadınız ve iletişim bilgileriniz gibi kişisel verileriniz
                      kullanılmayacaktır. Yalnızca iletişim talepleriniz ve mesajlarınızda yer alan bilgiler açık rızanıza
                      gerek olmadan kullanılabilecektir.
                    </p>
                    <p className="gr-text-9">
                      Ayrıca, kişisel verileriniz, resmi makamlarca ilgili mevzuata uygun şekilde talep edilmesi halinde
                      ve yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapılması zorunda olunan
                      durumlarda resmi makamlara açık rızanız olmaksızın açıklanabilecektir. Kişisel verilerinizin şirketimizi
                      etkileyen hukuki bir ihtilaf ile ilgili ya da potansiyel ihtilaflara ilişkin olarak gerekli olduğu ölçüde
                      kullanılması ve mahkemeler ve diğer yetkili kurum ve kuruluşlarla paylaşılması da mümkün olabilir. Bu çerçevede
                      kişisel verileriniz, CARGOPANEL'in hukuki yükümlülüklerini yerine getirmek amacıyla Kanun m. 5/2 (ç) kapsamında
                      ve CARGOPANEL'in haklarının tesisi veya korunması amacıyla Kanun m. 5/2 (e) amacıyla da açık rızanıza gerek
                      olmadan işlenebilecektir.
                    </p>
                    <p className="gr-text-9">
                      Son olarak, CARGOPANEL hakkındaki gelişmeler ve CARGOPANEL'in ürün ve hizmetleri hakkında bilgi almak istemeniz
                      durumunda, iletişim verileriniz ve adınız-soyadınız, Kanun m. 5/1 düzenlemesi uyarınca açık rızanıza dayanarak,
                      CARGOPANEL'ten tanıtım ve pazarlama amaçlı elektronik ileti almayı kabul etmeniz halinde ilgili mevzuatın izin
                      verdiği ölçüde basılı iletişim materyalleri hazırlamak ve iletmek, Elektronik Ticaretin Düzenlenmesi Hakkında
                      Kanun’a uygun çerçevede ticari elektronik ileti göndermek dahil pazarlama iletişimi yapmak, tanıtım ve haber
                      bültenleri göndermek, hukuk ve yazılım dünyasındaki güncel gelişmeler hakkında sizleri bilgilendirmek amaçlarıyla
                      da şirketimiz tarafından işlenebilecektir.
                    </p>
                  </div>
                  <div className="single-block mb-13">
                    <h3 className="gr-text-8 font-weight-bold pb-5">Kişisel Verilerinizi Kimlere ve Hangi Amaçlarla Aktarabiliriz?</h3>
                    <p className="gr-text-9">
                      Yukarıda belirtilen işleme amaçlarımızı yerine getirebilmek için gerekli olması halinde ve yalnızca ilgili amaçlar için gerekli olduğu ölçüde kişisel verileriniz;
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
                        Navlun hizmetlerinin yerine getirilmesi amacıyla taşıyıcı ya da diğer alt taşıyıcı şirketlere,
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Grup içi kararların alınabilmesi için CARGOPANEL’in dahil olduğu şirketler topluluğu bünyesinde yer alan diğer şirketlerle,
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Taleplerinize ve mesajlarınıza cevap verilmesi ve yukarıda belirtilen amaçların gerçekleştirilebilmesi için bir destek veya hizmet alınması gerektiği zaman hizmet / destek / danışmanlık alınan üçüncü kişi ve diğer firmalarla (örneğin yazılım teknik destek ve bakım hizmetleri sunan firmalar, elektronik ticaret şirketleri, kampanya ve ticari elektronik ileti bildirimlerine ilişkin teknoloji şirketleri, mali müşavir ve bağımsız denetim firmaları, avukatlar, arşivleme veya IT/bilgi teknoloji firmaları, CRM analistleri ve CRM firmalarıyla),
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Hukuki yükümlülüklerimizi yerine getirebilmemiz ve haklarımızın tesisi / korunması için zorunlu olması halinde kamu kurum ve kuruluşları ile yargı organlarıyla paylaşılabilecektir.
                      </li>
                    </ul>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">Kişisel Verilerinizi Hangi Yöntemlerle Topluyoruz?</h3>
                    <p className="gr-text-9">
                      Kişisel verilerinizi, iletişim kanallarımız (internet sitemiz, telefon numaramız ve e-posta adresimiz) aracılığıyla doğrudan sizden elde ediyoruz. Talebinizi daha iyi anlayabilmek adına, sizinle iletişime geçebilir, otomatik ya da otomatik olmayan yollarla, yazılı ya da sözlü olarak da sizden ek bilgi de talep edebiliriz. Bu bilgiler de yalnızca yukarıda belirtilen kapsamda işlenecektir.
                    </p>
                  </div>
                  <div className="single-block mb-13">
                    <h3 className="gr-text-8 font-weight-bold">Kişisel Verilerinize İlişkin Haklarınız Nelerdir?</h3>
                    <ul className="list-unstyled">
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlendiğine ilişkin bilgi talep etme,
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini talep etme, bu hakkınızı kullanmanız halinde bu durumun kişisel verilerinizin aktarıldığı üçüncü kişilere de bildirilmesini isteme,
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Kişisel verilerinizin işlenme nedenlerinin ortadan kalkması halinde kişisel verilerinizin silinmesini veya yok edilmesini isteme, bu hakkınızı kullanmanız halinde bu durumun kişisel verilerinizin aktarıldığı üçüncü kişilere de bildirilmesini isteme,
                      </li>
                      <li className="mt-7">
                        <i
                          className="rounded-circle bg-dark d-inline-block mr-5"
                          css={`
                            width: 9px;
                            height: 9px;
                          `}
                        ></i>
                        Elde ettiğimiz bilgilerin otomatik sistemler ile analizi yoluyla hakkınızda ortaya çıkan sonuca itiraz etme ve zarara uğramanız halinde tazminat talep etme.
                      </li>
                      <p className="gr-text-9 mt-7">
                        CARGOPANEL olarak, yürürlükteki mevzuattan kaynaklanan haklarımız ve yükümlülüklerimiz saklı kalmak kaydıyla, sahip olduğunuz bu hakları istediğiniz her zaman ve en uygun şekilde kullanabileceğinizi taahhüt ederiz.
                      </p>
                      <p className="gr-text-9 mt-7">
                        Kişisel verilerinize ilişkin tüm sorularınız ve tüm talepleriniz için bizimle aşağıda bulunan iletişim bilgileri aracılığıyla iletişime geçebilirsiniz:
                      </p>
                      <p className="gr-text-9 mt-7">
                      CARGOPANEL Teknoloji<br/>
                      Kocasinan Merkez Mah. Orman 1 Sk. No: 12/3 Bahçelievler/İstanbul<br/>
                      Telefon: <a href="tel:+908503091591">0850 309 15 91</a><br/>
                      E-Posta: info@cargopanel.co
                      </p>
                    </ul>
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
