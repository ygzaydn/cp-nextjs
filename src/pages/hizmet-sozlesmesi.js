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
                    Hizmet Sözleşmesi
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
                      İşbu Hizmet Sözleşmesi ve Kullanım Koşulları (“SÖZLEŞME”), CARGOPANEL ismi verilmiş olan CARGOPANEL Uluslararası Dijital Lojistik Platformu (“UYGULAMA”) kullanım haklarının sağlanması ile hüküm doğuran birtakım hüküm ve koşulları düzenlemektedir.
                    </p>
                    <p className="gr-text-9">
                      Bu SÖZLEŞME’de belirtilen hüküm ve şartlar tüm KULLANICILAR için geçerlidir. SÖZLEŞME’yi kabul ederek UYGULAMA’yı kullanmaya başlamadan önce mutlaka WWW.CARGOPANEL.CO adresinde yer alan kullanım talimatları ve diğer tüm bilgileri okuyunuz ve gerekli şartları haiz olduğunuzdan emin olunuz. UYGULAMA ve SÖZLEŞME hakkında sorularınızın olması halinde WWW.CARGOPANEL.CO adresi üzerindeki iletişim bölümünden lütfen CARGOPANEL ile iletişime geçiniz. SÖZLEŞME’de öngörülen yükümlülükleri yerine getiremeyeceğinizi ya da koşulları karşılayamayacağınızı düşünüyorsanız, SÖZLEŞME’yi kabul etmeyiniz ve UYGULAMA’yı kullanmayınız.
                    </p>
                    <p className="gr-text-9">
                      SÖZLEŞME’de, teknik yenilikler ve yasal düzenlemelerde yapılabilecek değişikler dahil ancak bunlarla sınırlı olmamak kaydıyla herhangi bir nedenle zaman zaman değişiklik yapılması gerekebilir. Söz konusu değişiklikler işbu SÖZLEŞME’ye dahildir ve bu SÖZLEŞME ile birlikte yorumlanacaktır. Bu nedenle, WWW.CARGOPANEL.CO adresinde, Sözleşme’nin en güncel haline her zaman ulaşma imkanına sahip olacaksınız. Her halükarda, değişiklikler hakkında Kullanıcılar usulüne uygun şekilde bilgilendirilecek ve onaya tabi hususları içeren değişiklik ve güncellemelerde onayları alınacaktır. Değişiklik bildirimlerinin Kullanıcı tarafından onaylanmaması halinde UYGULAMA’nın kullanımının işbu SÖZLEŞME hükümlerine göre sona ermesi ve UYGULAMA’dan çıkış söz konusu olabilir ve sona erme, SÖZLEŞME’de düzenlenen çıkış sürecine uygun şekilde gerçekleşecektir.
                    </p>
                    <p className="gr-text-9">
                      SÖZLEŞME, Kullanıcı tarafından elektronik ortamda kabul edilmekle birlikte yürürlüğe girecek olup; Taraflarca SÖZLEŞME'de belirtilen koşullar ve usuller doğrultusunda sona erdirilmediği sürece KULLANICI tarafından seçilen dönem süresince yürürlükte kalmaya devam edecektir.
                    </p>
                    <p className="gr-text-9">
                      Eğer bir kuruluş, şirket ya da başka bir tüzel kişilik adına SÖZLEŞME’yi kabul ederek UYGULAMA’yı kullanıyorsanız, söz konusu kurum adına hareket etmeye tam yetkiniz olduğunu ve işbu SÖZLEŞME’de belirtilen hüküm ve şartların söz konusu kurum için de bağlayıcı olacağını kabul etmiş sayılırsınız.
                    </p>
                    <p className="gr-text-9">
                      SÖZLEŞME’nin Tüketici olan KULLANICILAR için 6502 Sayılı Tüketicinin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri kapsamında özel olarak uygulanacak bölümleri mevcuttur ancak Tüketiciler herhalde diğer düzenlemelere de uygun olduğu ölçüde her zaman tabidir. Tüketici sayılmayan KULLANICILAR hakkında Türk Borçlar Kanunu ve Türk Ticaret Kanunu hükümleri ve bu SÖZLEŞME’nin tüketici olan KULLANICILAR’a özel düzenlemeleri dışındaki tüm hükümleri uygulanacaktır.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">1. TARAFLAR</h3>
                    <p className="gr-text-9">
                      SÖZLEŞME, (i) Kocasinan Merkez Mah. Orman 1 Sk. No: 12/3 Bahçelievler/İstanbul adresinde mukim ile (CARGOPANEL) SİTE üzerinden ulaşılan UYGULAMA’yı kullanmak üzere Sözleşme hükümlerini kabul ederek, KULLANICI olarak kaydolan ya da kaydolmadan kullanıma açık araçları kullanan kullanıcı (“KULLANICI”) arasında akdedilmektedir.
                    </p>
                    <p className="gr-text-9">
                      SÖZLEŞME’de CARGOPANEL ve KULLANICI bundan böyle ayrı ayrı “TARAF”, birlikte “TARAFLAR” olarak adlandırılmaktadır.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">2. TARAFLAR</h3>
                    <p className="gr-text-9">
                      <b>BULUT:</b> VERİ MERKEZİ’nde kurulu olan bulut sunucusunu ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>CARGOPANEL:</b> CARGOPANEL Teknoloji tarafından geliştirilen ve işbu SÖZLEŞME’ye konu hizmetlerin sağlanması konusunda oluşturulmuş CARGOPANEL Uluslararası Dijital Lojistik Platformunu ve/veya CARGOPANEL Teknoloji şirketini ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>HESAP:</b> UYGULAMA’nın kullanımı için KULLANICI’ya açılan özel üyelik anlamına gelir.
                    </p>
                    <p className="gr-text-9">
                      <b>HİZMETLER:</b> UYGULAMA kapsamında sunulan hizmetlerin türlerine ve kapsamlarına göre farklılaştırılmış olan ve güncel olarak WWW.CARGOPANEL.CO adresinde belirtilen hizmetleri ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>İÇERİK:</b> KULLANICI tarafından UYGULAMA’ya yüklenen veriler anlamına gelir.
                    </p>
                    <p className="gr-text-9">
                      <b>KULLANICI:</b> UYGULAMA’dan faydalanmak için Site’ye kullanıcı olarak kaydolan ve/veya giriş yaparak kullanan gerçek kişi, kurum veya kuruluşu ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>SİTE:</b> KULLANICI’nın UYGULAMA’ya ulaşabildiği internet sitesini ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>ŞİRKET:</b> Ticaret şirketlerini, gerçek kişi tacirleri ve yurtdışı tâbiyetli ticari amaç güden diğer tüzel kişileri ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>TÜKETİCİ:</b> Ticari veya mesleki olmayan amaçlarla hareket eden gerçek veya tüzel kişiyi ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>VERİ MERKEZİ:</b> CARGOPANEL’in UYGULAMA üzerine KULLANICI tarafından yüklenen İÇERİK’i saklamak konusunda bulut sunucu hizmeti aldığı ve Türkiye’de bulunan bağımsız üçüncü taraf veri merkezini ifade eder.
                    </p>
                    <p className="gr-text-9">
                      <b>UYGULAMA:</b> CARGOPANEL ismi verilmiş olan CARGOPANEL Uluslararası Dijital Lojistik Platformunu ve uygulama ile sağlanan hizmetlerin tümünü ifade eder.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">3. KONU</h3>
                    <p className="gr-text-9">
                      İşbu SÖZLEŞME, CARGOPANEL tarafından, CARGOPANEL’e ait SİTE üzerinden erişilen BULUT tabanlı UYGULAMA ile KULLANICILARA verilecek hizmetlerin belirlenmesi, UYGULAMA’dan faydalanılması ve KULLANICI tarafından yüklenen İÇERİK’e ilişkin şartlar ile TARAFLAR’ın hak ve yükümlülüklerinin belirlenmesi amacıyla akdedilmektedir.
                    </p>
                    <p className="gr-text-9">
                      WWW.CARGOPANEL.CO adresi üzerinde UYGULAMA’nın kullanımına ilişkin olarak CARGOPANEL tarafından KULLANICI’ya sunulan/sunulacak kullanım koşulları gibi düzenlemeler de işbu SÖZLEŞME’nin ayrılmaz bir parçası niteliğinde olup, burada yer alan hak ve yükümlülüklerle birlikte TARAFLAR’ın hak ve yükümlülüklerinin tamamını oluşturmaktadır.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">4. UYGUN KULLANIM KOŞULLARI</h3>
                    <p className="gr-text-9">
                      4.1. UYGULAMA kapsamında sunulan HİZMETLER’e WWW.CARGOPANEL.CO adresinde yer verilmekte olup, burada yer alan hizmet türleri, CARGOPANEL’in takdirinde olmak üzere, KULLANICI’ların yorum ve geri bildirimleri kapsamında zaman zaman değiştirilebileceği gibi, CARGOPANEL de zaman zaman bu hizmetlere yenilerini ekleyip mevcut hizmetlerde değişiklik ve/veya güncelleme yapabilecektir. CARGOPANEL, UYGULAMA’nın güvenliğini sağlamak, sistemlerin işlevlerindeki bir değişikliği yansıtmak, hataları ortadan kaldırmak veya UYGULAMA’yı teknik gelişime uyarlamak amaçlarıyla zaman zaman güncellemeler sağlayabilir ve gerekmesi halinde KULLANICI UYGULAMA güncellemelerini zamanında yapmakla yükümlüdür. UYGULAMA’nın KULLANICI tarafından zamanında güncellenmemesinden doğabilecek aksamalardan CARGOPANEL TEKNOLOJİ sorumlu değildir.
                    </p>
                    <p className="gr-text-9">
                      4.2. KULLANICI’nın, SİTE üzerinden, “Hizmet Sözleşmesi’ni okudum ve kabul ediyorum” maddesini işaretleyip “DEVAM” seçeneğini tıklaması ile kabul beyanının CARGOPANEL kayıtlarına geçtiği anda SÖZLEŞME hükümleri kabul edilmiş sayılarak SÖZLEŞME yürürlüğe girmiş olur. KULLANICI da bu beyanı ile işbu SÖZLEŞME’nin bütün hükümleri ile bağlı olduğunu ve bu hükümlere uymayı ve işbu SÖZLEŞME’nin bağlayıcı olduğunu kabul, beyan ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      4.3. İşbu SÖZLEŞME’nin bir tüzel kişi adına kabul edilmesi, ilgili kişinin bu işlemi yapmaya yetkili olduğunu gösterir. CARGOPANEL, ilgili kişinin imza yetkisini gösterir evrakı her zaman talep edebilir. İşbu SÖZLEŞME’nin yetkisiz bir kişi tarafından kabul edilmesi halinde, işbu SÖZLEŞME’de belirlenen yasal yaptırımların sorumluluğu yetkisiz olarak işlem yapmış olan kişi üzerinde olacaktır.
                    </p>
                    <p className="gr-text-9">
                      4.4. KULLANICI, CARGOPANEL’i yürürlükte bulunan tüm ulusal ve uluslararası mevzuata ve internet kullanımına ilişkin kural ve yasalara uygun olarak kullanacağını kabul, beyan ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      4.5. UYGULAMA, SÖZLEŞME’nin kabulü akabinde KULLANICI tarafından herhangi bir hizmetin satın alınması için kullanılabilir.
                    </p>
                    <p className="gr-text-9">
                      4.6. UYGULAMA, KULLANICI tarafından herhangi bir hizmetin satın alınması için kullanılmazsa, CARGOPANEL TEKNOLOJİ herhangi bir ihtara gerek kalmaksızın SÖZLEŞME’Yİ feshedebilir.
                    </p>
                    <p className="gr-text-9">
                      4.7. İşbu SÖZLEŞME kapsamında ve WWW.CARGOPANEL.CO adresinde tanımlanan her bir hesapta yer alan KULLANICI’nın kullandığı CARGOPANEL kullanıcı adı ve şifresi KULLANICI’ya özeldir ve bu CARGOPANEL kullanıcı adı ve şifresi ile sadece bir (1) HESAP oluşturma imkanına sahiptir. Aynı CARGOPANEL kullanıcı adı ve şifresi ile iki farklı KULLANICI kaydı yapılamaz.
                    </p>
                    <p className="gr-text-9">
                      4.8. KULLANICI, kendi belirleyeceği ve güvenli bir şekilde saklamakla yükümlü olduğu şifre ile CARGOPANEL’i kullanacaktır. KULLANICI, şifresini değiştirmek istediği takdirde, şifrenin seçimi, değiştirilmesi ve korunması tamamı ile KULLANICI’nın sorumluluğunda olmak üzere dilediği zamanda değiştirebilecektir. KULLANICI, şifresini paylaşması, şifresini kaybetmesi ya da şifresinin üçüncü kişilerce öğrenilmesi durumlarında konuyu derhal CARGOPANEL’e bildirip yeni şifre temin etmedikçe, şifresi ile yapılan işlemlerden gerek CARGOPANEL’e gerek üçüncü kişilere karşı kendisinin sorumlu olacağını, CARGOPANEL’in bu durumda herhangi bir sorumluluğunun olmayacağını kabul, beyan ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      4.9. KULLANICI, dahil olduğu UYGULAMA hizmetlerine, CARGOPANEL’in bildirdiği SİTE üzerinden ulaşabilecektir. CARGOPANEL, KULLANICI’ya UYGULAMA kullanımına ilişkin üyelik dahilinde tanıdığı hakları değiştirme hakkını saklı tutar.
                    </p>
                    <p className="gr-text-9">
                      4.10. KULLANICI, CARGOPANEL veya onun içerik, ortam veya platform tedarikçilerinin sitelerine, mal veya hizmetlerine, UYGULAMA, veri veya datalarına herhangi bir şekilde zarar verecek, erişimi engelleyecek, CARGOPANEL yazılımının kullanımını engelleyebilecek ya da CARGOPANEL’e zarar verecek nitelikte ve CARGOPANEL’in izin verdiği sınırların ötesinde yükleme, erişim ya da işlemler, müdahaleler yapamaz. CARGOPANEL’i bu şekilde ya da üçüncü kişilerin CARGOPANEL hizmetlerinden faydalanmasına engel olacak şekilde kullanamaz. KULLANICI, bu SÖZLEŞME ile tanınan hakkını, CARGOPANEL’in yazılı izni olmaksızın hiçbir şekilde üçüncü kişilere bedelsiz de olsa devredemez, kiralayamaz, kullanımına ve/veya yararına sunamaz veya satamaz. CARGOPANEL’in kullanılması her zaman bu SÖZLEŞME’nin koşullarına tabidir.
                    </p>
                    <p className="gr-text-9">
                      4.11. KULLANICI, CARGOPANEL hizmetlerinden faydalanabilmek için, kayıt formunu tam ve doğru olarak doldurarak KULLANICI hesabı açmayı ve CARGOPANEL kullanıcı adını ve şifresini girerek, CARGOPANEL’in sistemine giriş yapmayı kabul, beyan ve taahhüt eder. UYGULAMA’nın en uygun şekilde çalışması ve sonuç vermesi için KULLANICI tarafından verilerin UYGULAMA’ya tam, doğru ve hatasız girilmesi gerekir. Herhangi bir şekilde kasti olarak yanlış veya eksik bilgi beyanında bulunan KULLANICI, gerçek bilgilerini eksiksiz sağlayana kadar, CARGOPANEL bu KULLANICI’ya sağladığı UYGULAMA’yı durdurma hakkını saklı tutar. Ayrıca KULLANICI HESABININ yetkisiz olarak kullanıldığına dair işaretler varsa ve/veya KULLANICI HESABINDAN UYGULAMA’ya yetkisiz erişim sağlanmış veya sağlanmaya çalışılmışsa, CARGOPANEL HESABI engelleyebilir. Böyle bir durumda, CARGOPANEL, KULLANICI HESABI bilgilerinde bulunan e-posta adresi aracılığıyla derhal KULLANICI’ya bildirimde bulunacak ve KULLANICI’nın, CARGOPANEL’in sistemlerine yetkisiz erişim elde etmeye çalıştığı varsayımına ilişkin bilgiler bulunmadığı sürece, KULLANICI’nın HESABINA yeniden erişim izni verecektir.
                    </p>
                    <p className="gr-text-9">
                      4.12. KULLANICI, hizmetlerden faydalanmak için sağladığı bilgilerde herhangi bir değişiklik olması halinde, söz konusu bilgileri derhal güncelleyecektir. Bu bilgilerin güncel olmaması nedeniyle UYGULAMA’ya erişim sağlanamamasından, yaşanabilecek gecikmelerden ve UYGULAMA’dan faydalanılamamasından CARGOPANEL sorumlu değildir.
                    </p>
                    <p className="gr-text-9">
                      4.13. KULLANICI, kendisine CARGOPANEL tarafından yapılacak hizmet yenileme duyuruları dahil olmak üzere, her türlü bildirim için CARGOPANEL’e kayıt olurken bildirdiği iletişim bilgilerinin (varsa KEP adresi, e-posta, cep telefonu, telefon, faks vb.) kullanılacağını kabul eder. İletişim bilgilerinin geçerli olması, alınan hizmetlerle ilgili yetkili bir kişiye ait olması ve güncel tutulması konusundaki tüm sorumluluk KULLANICI’ya aittir.
                    </p>
                    <p className="gr-text-9">
                      4.14. KULLANICI’ların kaydolurken bildirdikleri e-postalar vasıtasıyla, CARGOPANEL üzerinde yer alan genel bilgilendirme aracılığıyla iletişim kurulacaktır. E-posta ile yapılan iletişim yazılı iletişimin yerini tutar. E-posta ve varsa KEP adresini güncel tutmak, CARGOPANEL’i bilgilendirmeler için düzenli kontrol etmek KULLANICI’nın sorumluluğundadır.
                    </p>
                    <p className="gr-text-9">
                      4.15. KULLANICI kaydolurken ve/veya hizmetleri kullanmaya başlamasından sonra CARGOPANEL’e bildireceği bilgilerin doğru ve güncel olduğunu kabul eder. KULLANICI tarafından bildirilen bilgilerin yanlış, eksik veya güncel olmamasından dolayı meydana gelecek aksaklık ve zararlardan dolayı KULLANICI, CARGOPANEL’ten hiçbir şekilde tazminat talebinde bulunmayacağını peşinen ve açıkça kabul eder.
                    </p>
                    <p className="gr-text-9">
                      4.16. KULLANICI, CARGOPANEL hizmetlerini WWW.CARGOPANEL.CO adresinde belirtilen kullanım talimatları ve bilgilendirmeler doğrultusunda kullanmakla ve verilerin tam ve doğru şekilde girilmesinden emin olmakla yükümlü olup UYGULAMA’nın sunduğu hizmetlerden tam ve doğru sonuç alınmasının bu talimat ve bilgilendirmelere uygun olarak kullanılmasına bağlı olduğunu kabul, beyan ve taahhüt eder. KULLANICI, bu talimatlara uymaması sebebiyle ve/veya KULLANICI’nın kullanmakta olduğu diğer uygulama ve donanımlardan kaynaklanan sebeplerle hizmeti alamaması durumunda CARGOPANEL’den herhangi bir şekilde tazminat talebinde veya sair herhangi bir talepte bulunmayacağını kabul, beyan ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      4.17. KULLANICI, CARGOPANEL’i hukuka aykırı, amacı dışında, hileli veya uygunsuz bir amaç için kullanmayacağını, bu yöndeki bir fiile katılmayacağını, üçüncü kişilere izin vermeyeceğini ve/veya teşvik etmeyeceğini, üçüncü kişilerce CARGOPANEL şifresi üzerinden bu yönde uygunsuz kullanımı engelleyeceğini ve/veya CARGOPANEL’e derhal ihbar edeceğini, belirli zamanlarda revize edildiği şekliyle işbu SÖZLEŞME’yi ihlal edecek bir şekilde hareket etmeyeceğini, işbu SÖZLEŞME ile edinilen hakları üçüncü kişilere bedelli veya bedelsiz kullandırmayacağını işbu SÖZLEŞME ile kabul, beyan ve taahhüt eder. CARGOPANEL, KULLANICI tarafından anılan fiillerin gerçekleştirilmesi durumunda işbu SÖZLEŞME’yi derhal haklı sebeple feshedebilir ve her türlü hukuki hakkını saklı tutar.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">5. TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ</h3>
                    <p className="gr-text-9">
                      5.1. KULLANICI, kota limitli bir internet bağlantı noktasından bağlanarak CARGOPANEL hizmetinden yararlanması halinde, diğer benzer internet hizmetlerinde olduğu gibi kota limitinden kullanılacağı konusunda bilgilendirildiğini, bu sebeple oluşabilecek kota aşımından CARGOPANEL’in sorumlu olmadığını kabul, beyan ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      5.2.CARGOPANEL’in kullanımı için sayılanlarla sınırlı olmamak üzere, KULLANICI tarafından aşağıdaki gereksinimlerin karşılanması ve KULLANICI’nın aşağıdaki kurallara uyması gerekmektedir:
                    </p>
                    <p className="gr-text-9">
                      5.2.1. KULLANICI’nın UYGULAMA’ya erişebilmesi için kendi bilgisayarında ve dünyanın herhangi bir yerinde dosyalarına erişebilmesi için kullandığı cihaz internete bağlı olmalıdır. Kullanıcının, hem kişisel bilgisayarında hem de dünyanın herhangi bir yerinde verilerine erişmek maksadıyla kullanacağı bilgisayarda güncel bir internet tarayıcısı yüklü olmalıdır.
                    </p>
                    <p className="gr-text-9">
                      5.2.2. KULLANICI, CARGOPANEL kullanımı için WWW.CARGOPANEL.CO adresinden ulaşılabilecek kullanım talimat ve bilgilendirmelerini okumakla yükümlüdür.
                    </p>
                    <p className="gr-text-9">
                      5.3. Sayılan hallerle sınırlı olmamak üzere KULLANICI, herhangi bir sebeple aşağıdaki durumların ortaya çıkması halinde CARGOPANEL’in herhangi bir sorumluluğu olmayacağını ve CARGOPANEL’den herhangi bir tazminat talebinde bulunmayacağını kabul ve taahhüt eder:
                    </p>
                    <p className="gr-text-9">
                      5.3.1. KULLANICI’nın, UYGULAMA hizmetlerini, kullanım talimat ve bilgilendirmelerinde belirtilen şekillerde kullanmıyor olmasından kaynaklanan sorunlar,
                    </p>
                    <p className="gr-text-9">
                      5.3.2. Telekomünikasyon altyapısı da dahil olmak üzere, KULLANICI’nın yararlandığı altyapı, donanım ve ekipmanda oluşabilecek ve herhangi bir sebepten kaynaklanan, bağlantıda ortaya çıkabilecek kısa ve uzun süreli kesinti, sorun ve arızalar;
                    </p>
                    <p className="gr-text-9">
                      5.3.3. KULLANICI’nın, asgari teknik özelliklere sahip bir donanım üzerinde kullanmamasından ve gerekli bu donanımı kendisinin temin etmemesinden doğan ve doğacak Uygulama/donanım uyuşmazlıkları;
                    </p>
                    <p className="gr-text-9">
                      5.3.4. KULLANICI hatalarından kaynaklanan hata, arıza ve sorunlar;
                    </p>
                    <p className="gr-text-9">
                      5.3.5. KULLANICI’nın kullanmakta olduğu diğer yazılım ve donanımların yetersizliği ve/veya arızası sebebiyle CARGOPANEL hizmetinde ortaya çıkabilecek sorunlar;
                    </p>
                    <p className="gr-text-9">
                      5.3.6. KULLANICI’nın CARGOPANEL hizmetini, diğer internet hizmetleri ile eş zamanlı kullanması durumunda, internet bağlantı hızındaki olası yavaşlamalar ve/veya buna bağlı olarak CARGOPANEL hizmetinde ortaya çıkabilecek sorunlar;
                    </p>
                    <p className="gr-text-9">
                      5.3.7. KULLANICI’nın işbu SÖZLEŞME’ye aykırı fiil ve taleplerine bağlı olarak ortaya çıkan uyuşmazlıklar.
                    </p>
                    <p className="gr-text-9">
                      5.4. KULLANICI, CARGOPANEL’in bir parçası olan UYGULAMA ve şifreleme sistemine hiçbir şekilde müdahale etmeyecektir ve hiçbir şekilde CARGOPANEL kapsamında sakladığı dosyaları ve içerikleri kullanarak CARGOPANEL’in, üçüncü kişilerin ve/veya hak sahiplerinin menfaatlerine zarar verecek ve/veya yasaya aykırı faaliyetlerde bulunmayacak ve bulunulmasına izin vermeyecektir. Aksi takdirde KULLANICI işbu SÖZLEŞME’nin CARGOPANEL’inn tek taraflı yazılı bildirimi ile derhal feshedilebileceğini ve ihlali nedeniyle doğan zararların tazmininden CARGOPANEL ve hak sahibi üçüncü kişilere karşı sorumlu olacağını kabul, beyan ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      5.5. CARGOPANEL, KULLANICI tarafından UYGULAMA’ya yüklenen hiçbir İÇERİK’ten ve/veya İÇERİK’ler üzerinden gerçekleştirilen hiçbir fiilden sorumlu değildir. CARGOPANEL’in UYGULAMA’ya HESAP KULLANICI’sı tarafından yüklenen İÇERİK’e, CARGOPANEL üzerinden satın alınan hizmetlerin ifası için gerekli olduğu nispette erişim sağlayacaktır.
                    </p>
                    <p className="gr-text-9">
                      5.6. KULLANICI tarafından UYGULAMA’ya yüklenen İÇERİK, VERİ MERKEZİ’nde kurulu olan BULUT üzerinde saklanacaktır.
                    </p>
                    <p className="gr-text-9">
                      5.7. CARGOPANEL KULLANICI’nın UYGULAMA’yı kullanırken eklediği İÇERİK üzerinden CARGOPANEL’in kendi ürettiği verileri, anonimleştirilmiş olarak istatistiki raporlar üretmek, sektörel analizler yapmak, UYGULAMA kapsamında yeni ürün ve hizmetler geliştirmek gibi amaçlarla kullanabilecek, işleyebilecek, üçüncü kişilerin kullanımına sunabilecek veya satabilecektir. KULLANICI’nın İÇERİK üzerindeki hakları saklı olmak kaydıyla, anonimleştirilen bu veriler ve bu veriler kullanılarak meydana getirilen her türlü çıktı üzerindeki fikri mülkiyet hakları CARGOPANEL’e aittir.
                    </p>
                    <p className="gr-text-9">
                      5.8. İşbu SÖZLEŞME’deki yükümlüklerini kısmen veya tamamen yerine getirmeyen KULLANICI’ya CARGOPANEL hizmetinin sunulamaması veya düşük kalitede sunulmasından CARGOPANEL hiçbir şekilde sorumlu değildir.
                    </p>
                    <p className="gr-text-9">
                      5.9. KULLANICI, CARGOPANEL’i bu SÖZLEŞME hükümlerine aykırı kullandığı takdirde, tüm sorumluluğun kendisine ait olduğunu ve bu nedenle ortaya çıkabilecek zarar ve ziyandan ve üçüncü şahıslar tarafından açılacak her türlü dava, zarar veya ziyan taleplerinden sorumlu olacağını, CARGOPANEL’in söz konusu dava, şikayet ve benzeri konularda hiçbir şekilde taraf ve muhatap olmayacağını, SÖZLEŞME hükümlerinin KULLANICI tarafından ihlali nedeniyle, CARGOPANEL’in üçüncü şahıslar tarafından açılacak herhangi bir davada taraf addedilerek üçüncü şahıslara herhangi bir tazminat ödemesi veya yükümlülük altına sokulması durumunda, başta ödemiş olduğu tazminat olmak üzere, bundan dolayı uğrayacağı her türlü zararı için KULLANICI’ya rücu edebileceğini ve CARGOPANEL’in talebi üzerine, ödenmiş olan tazminat, zarar ve masrafları kayıtsız şartsız olarak, defaten ödemeyi gayrı kabulü rücu olarak beyan, kabul ve taahhüt etmiştir.
                    </p>
                    <p className="gr-text-9">
                      5.10. KULLANICI, işbu SÖZLEŞME hüküm ve koşullarına riayet edeceğini kabul, beyan ve taahhüt eder.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">6. ÜCRETLENDİRME ve ÖDEME</h3>
                    <p className="gr-text-9">
                      6.1. KULLANICI, CARGOPANEL üzerinden aldığı teklife karşılık yükünü CARGOPANEL’e teslim etmesi ile teklifi kabul etmiş sayılır. CARGOPANEL yük teslim edilene kadar verdiği teklifte değişiklik yapma hakkını saklı tutar. Yükün verilen teklif ile uyumsuz olması halinde teklifte geçerli birim ücretler üzerinden ödeme yapılacaktır.
                    </p>
                    <p className="gr-text-9">
                      6.2. KULLANICI CARGOPANEL hizmetlerine karşılık aldığı faturayı belirtilen vadelerde SİTE üzerinde yer alan ödeme yöntemlerinden biri ile ödeyecektir.
                    </p>
                    <p className="gr-text-9">
                      6.3. KULLANICI’nın fatura borcunu zamanında ödememesi halinde, KULLANICI’nın UYGULAMA’ya erişimi CARGOPANEL tarafından askıya alınabilir. CARGOPANEL muaccel alacakları için KULLANICI’nın CARGOPANEL uhdesinde tuttuğu yükü üzerinde hapis hakkına sahiptir. Bu durumda KULLANICI, işbu SÖZLEŞME madde 13’te yer alan çıkış usullerinin uygulanabileceği hususunda bilgilendirilmiştir.
                    </p>
                    <p className="gr-text-9">
                      6.4. CARGOPANEL, ücretlerinde dilediği zaman değişiklik yapma hakkını haiz olup güncel fiyatlar WWW.CARGOPANEL.CO adresinde yer alacaktır.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">7. FİKRİ MÜLKİYET HAKLARI</h3>
                    <p className="gr-text-9">
                      7.1. WWW.CARGOPANEL.CO adresi, SİTE ve UYGULAMA içerisindeki görsel ve tasarımlar, yazılar, logolar, grafikler de dahil olmak üzere WWW.CARGOPANEL.CO , SİTE ve UYGULAMA üzerinde, 6769 sayılı Sınai Mülkiyet Kanunu ve 5846 sayılı Fikir ve Sanat Eserleri Kanunu her türlü mali, manevi ve ticari haklar, fikri mülkiyet ve menfaat CARGOPANEL’e aittir. SÖZLEŞME, WWW.CARGOPANEL.CO, ve SİTE’ye ilişkin diğer koşullardaki hiçbir hüküm WWW.CARGOPANEL.CO, SİTE ve UYGULAMA’ya ilişkin hakların ve menfaatlerin KULLANICI’ya devredildiği şeklinde yorumlanamaz. CARGOPANEL, KULLANICI’ya hizmetlerden yararlanabilmesi için UYGULAMA üzerinde şahsi kullanımla sınırlı olarak, Sözleşme süresi ile sınırlı, münhasır olmayan, devredilemeyen, değiştirilebilir kullanma lisans hakkı tanımaktadır. Belirtilen kullanım hakkı dışında kalan tüm fikri ve sınaî mülkiyet hakları CARGOPANEL’e aittir ve KULLANICI’ya tanınan bu sınırlı kullanım hakkı, CARGOPANEL’in başkalarına lisans verme hakkı başta olmak üzere diğer tüm haklarını serbestçe kullanmasını sınırlayacak şekilde yorumlanamaz.
                    </p>
                    <p className="gr-text-9">
                      7.2. UYGULAMA kapsamında KULLANICI’ya sunulan ve/veya gelecekte sunulacak olan her türlü araç, CARGOPANEL bünyesinde orijinal olarak üretilmiş, geliştirilmiş ve elektronik olarak işlenebilir hale getirilmiş olup yaratıcısının hususiyetini taşıyan bu belgeler üzerinde 5846 sayılı Fikir ve Sanat Eserleri Kanunu kapsamında eser hakkı sahipliğinden doğan her türlü hak CARGOPANEL’e aittir ve CARGOPANEL, bu araçları, KULLANICI’nın kendisinin ihtiyaçları doğrultusunda kullanımı konusunda sınırlı bir izin vermektedir. Bu araçların, bu amaçlar dışında, bağımsız olarak kullanılması, çoğaltılması başta 5846 sayılı Fikir ve Sanat eserleri Kanunu ve sair mevzuat kapsamında hukuki ve/veya cezai yaptırımlara tabiidir.
                    </p>
                    <p className="gr-text-9">
                      7.3. KULLANICI, doğrudan ya da dolaylı olarak, UYGULAMA’nın kaynak kodunu, amaç gramını, altyapıyı, fikirleri, algoritmaları ya da UYGULAMA’yla bağlantılı olarak bulunan uygulama ya da herhangi bir uygulama, doküman ya da veri üzerinde ters mühendislik yapmamayı, kaynak koda dönüştürmemeyi, sökmemeyi veya başka bir yöntemle ortaya çıkarmamayı; mülkiyete ilişkin uyarı ve etiketleri UYGULAMA’dan, UYGULAMA’yla bağlantılı olarak bulunan UYGULAMA ya da herhangi bir UYGULAMA’dan kaldırmamayı, UYGULAMA’ya ya da UYGULAMA’yla bağlantılı olarak bulunan uygulama ya da herhangi bir uygulamaya bağlı olarak türetilmiş işleri modifiye veya tercüme etmemeyi, bu tarz işler oluşturmamayı; UYGULAMA ya da UYGULAMA’yla bağlantılı olarak bulunan uygulama ya da herhangi bir uygulamayı kopyalamamayı, dağıtmamayı, üzerlerinde rehin kurmamayı, temlik etmemeyi ya da bunları devretmemeyi veya bunlar üzerinde hiç kimse lehine hak tesis etmemeyi kabul eder.
                    </p>
                    <p className="gr-text-9">
                      7.4. Ayrıca KULLANICI’nın UYGULAMA veya CARGOPANEL sistemlerinin güvenliğini tehdit edebilecek ve/veya UYGULAMA, CARGOPANEL ve diğer kullanıcılara zarar verebilecek eylemlerde bulunması, UYGULAMA ile UYGULAMA’ya ait diğer yazılımların çalışmasını veya diğer kullanıcıların UYGULAMA’dan faydalanmasını engelleyebilecek herhangi bir girişimde bulunması, bu sonuçları verecek şekilde sistem veya UYGULAMA’ya orantısız yük bindirmesi ya da bu yönde denemeler yapması; UYGULAMA’nın çalışmasını engelleyecek yazılımlar kullanması, kullanmaya çalışması veya her türlü yazılım, donanım ve sunucuların çalışmasını aksatması, bozulmasına yol açması, saldırılar düzenlemesi, meşgul etmesi veya bunlara sair surette müdahale etmesi, CARGOPANEL sunucularına erişim sağlamaya çalışması kesinlikle yasaktır.
                    </p>
                    <p className="gr-text-9">
                      7.5. KULLANICI, hiçbir şekilde ve nedenle UYGULAMA’yı ya da UYGULAMA’yla bağlantılı olarak bulunan uygulama ya da herhangi bir uygulamayı kopyalama, değiştirme, çoğaltma, ters mühendisliğe tabi tutma, geri derleme ve sair şekillerde UYGULAMA’nın kaynak koduna ulaşma, eser oluşturma hakkına sahip değildir.
                    </p>
                    <p className="gr-text-9">
                      7.6. KULLANICI işbu SÖZLEŞME uyarınca, CARGOPANEL’in kullanımı sırasında CARGOPANEL’in kullanım amaçları dışında kalan, CARGOPANEL’in içerik, ortam veya platform tedarikçileri dahil olmak üzere eserler üzerinde hak sahibi üçüncü kişilere veya CARGOPANEL’e ilişkin öğrenilen gizli bilgileri muhafaza etmeyi, kısmen veya tamamen üçüncü kişilere doğrudan veya dolaylı olarak hiçbir şekilde ifşa etmemeyi veya açıklamamayı kabul eder.
                    </p>
                    <p className="gr-text-9">
                      7.7. İşbu Sözleşme herhangi bir nedenle sona erse dahi, KULLANICI’nın gizlilik ve fikri mülkiyet hakları ile ilgili yükümlülükleri herhangi bir süre kısıtlamasına tabi olmaksızın yürürlükte kalacaktır.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">8. SORUMLULUĞUN SINIRLANDIRILMASI</h3>
                    <p className="gr-text-9">
                      8.1. CARGOPANEL, (i) CARGOPANEL’de yer alan herhangi bir verinin maruz kalacağı kayıp veya hasarlardan ya da herhangi bir dosya, uygulama, teçhizat veya verideki dolaysız, özel, kazai, zincirleme veya taksiri hata, bozulma ve hasarlardan, veya (ii) CARGOPANEL’in KULLANICI tarafından kullanımı neticesinde oluşacak herhangi bir telif hakkı ve mülkiyet hakkı ihlalinden hiçbir şekilde sorumlu olmayacaktır. CARGOPANEL, CARGOPANEL üzerinde, tamamen kendi takdirinde olmak üzere, değişiklik yapma, kullanım şartlarını değiştirme, uygun gördüğü diğer değişiklikleri yapma yetkilerine sahiptir ve bu durum KULLANICI’ya herhangi bir tazminat hakkı doğurmayacaktır.
                    </p>
                    <p className="gr-text-9">
                      8.2. UYGULAMA 2021 yılından beri geliştirilmekte ve iyileştirme çalışmaları sürdürülmektedir. UYGULAMA, KULLANICILARIN kullanımına sunulmadan önce denetlenmekte ve sızma testi, güvenlik testi gibi gerekli tüm testlerden geçirilerek, UYGULAMA’nın kararlaştırılan işlevleri en iyi şekilde yerine getirmesi için gerekli azami özeni göstermektedir. Ancak şu kadar ki, CARGOPANEL, UYGULAMA’nın ve yazılımlarının tümüyle kusursuz, hatasız, kesintisiz, mükemmel olduğu ve KULLANICI’nın genel ve/veya özel ihtiyaçlarını tamamen karşılayacağı şeklinde bir iddia ve/veya açık veya zımni taahhütte bulunmaz.
                    </p>
                    <p className="gr-text-9">
                      8.3. CARGOPANEL, donanım veya işletim sistemi arızasından, iletişim ağı (network) tasarım ve bağlantı hatalarından, voltaj dalgalanması ve elektrik kesilmesinden, virüs bulaşmasından ve benzeri çevresel faktörler ve KULLANICI hatalarından kaynaklanacak bilgi ve yazılım kayıplarından sorumlu tutulamaz.
                    </p>
                    <p className="gr-text-9">
                      8.4. KULLANICI, UYGULAMA’nın uyarlamasının yapılabilmesi ve uygulanabilmesi için belirtilen teknik alt yapı ve diğer koşulları sağlayacağını, CARGOPANEL’in yazılım-donanım uyuşmazlığı ile ilgili hiçbir maddi ve hukuki sorumluluğunun bulunmadığını kabul eder.
                    </p>
                    <p className="gr-text-9">
                      8.5. KULLANICI, CARGOPANEL’in kendisine yapmış olduğu bildirimlerde, her ne koşula bağlı olursa olsun, oluşabilecek blemler ve/veya gecikmeler nedeniyle hizmetlerinde yaşanabilecek aksaklıklardan CARGOPANEL’i sorumlu tutmayacağını kabul eder.
                    </p>
                    <p className="gr-text-9">
                      8.6. KULLANICI, UYGULAMA üzerinden CARGOPANEL’in kontrolünde olmayan başka internet sitelerine ve/veya platformlara, dosyalara veya içeriklere link verilebileceğini, üçüncü taraflara ait hizmetlerin sunulabileceğini ve bu tür linklerin yöneldiği internet sitesini veya işleten/hizmet veren kişiyi desteklemek amacıyla veya internet sitesi veya içerdiği bilgilere yönelik herhangi bir türde bir beyan veya garanti niteliği taşımadığını, söz konusu linkler vasıtasıyla erişilen platformlar, internet siteleri, dosyalar ve içerikler, hizmetler veya ürünler veya bunların içeriği hakkında CARGOPANEL’in herhangi bir sorumluluğu olmadığını kabul ve beyan eder.
                    </p>
                    <p className="gr-text-9">
                      8.7. KULLANICI, UYGULAMA üzerinden sunulan içeriklere erişim ve bunların kalitesinin büyük ölçüde ilgili servis sağlayıcısından temin edilen hizmetin kalitesine dayandığını ve söz konusu hizmet kalitesinden kaynaklı sorunlarda CARGOPANEL’in herhangi bir sorumluluğunun bulunmadığını, CARGOPANEL’in UYGULAMA’nın herhangi bir cihaz ya da web tarayıcı ile uyumlu olduğuna dair bir taahhütte bulunmadığını, UYGULAMA’nın işleyişinin kusurdan ari olmadığını ve zaman zaman teknik aksaklıklar veya erişim engelleriyle karşılaşabileceğini bildiğini kabul ve beyan eder.
                    </p>
                    <p className="gr-text-9">
                      8.8. KULLANICI, CARGOPANEL ile ilgili olarak temin edilen tüm hizmetleri riskleri ile kabul ederek kullanacağını kabul eder. CARGOPANEL’in içeriklerine ilişkin olarak veya kullanımından kaynaklanan veri kaybı veya bilgisayar sistemi hasarları KULLANICI’nın sorumluluğunda olup, CARGOPANEL’in bu hususta herhangi bir sorumluluğu bulunmamaktadır.
                    </p>
                    <p className="gr-text-9">
                      8.9. KULLANICI, CARGOPANEL’in kodlarında veya datalarında yapacağı herhangi bir değişiklikten yasal olarak sorumludur.
                    </p>
                    <p className="gr-text-9">
                      8.10. CARGOPANEL’in kullanımı, uygulanması ya da verilen hizmetler nedeniyle oluşabilecek sonuçlardan ve/veya bu Uygulamalara dayanılarak alınan kararlardan, yapılan işlerden doğrudan veya dolaylı oluşabilecek maddi, manevi, hukuki ve mali sonuçlardan, bu nedenle oluşabilecek kazanç ve kayıplardan CARGOPANEL hiçbir şekilde sorumlu tutulamaz.
                    </p>
                    <p className="gr-text-9">
                      8.11. CARGOPANEL, yasadışı içeriğin barındırılması ve/veya herhangi bir yolla paylaşılması durumunda sorumlu değildir. Yedeklenen ve saklanan dosyaların içeriğinden KULLANICI sorumludur.
                    </p>
                    <p className="gr-text-9">
                      8.12. CARGOPANEL’in işbu SÖZLEŞME kapsamında KULLANICI nezdinde doğabilecek her türlü zarardan sorumluluğu her halükarda UYGULAMA’ya ilişkin olarak işbu SÖZLEŞME kapsamında KULLANICI tarafından ödenmiş son gönderiye tekabül eden toplam bedelle sınırlı olacaktır.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">9. MÜCBİR SEBEP</h3>
                    <p className="gr-text-9">
                      9.1. Taraflar iradeleri dışında olan ve iradi olarak önlenemeyen, çalışma imkanlarını kısmen veya tamamen geçici veya daimi olarak durduracak derecede meydana gelen deprem, sel gibi doğal afetler, harp, seferberlik, yangın, infilak, grev ve lokavt, salgın hastalık, hükümet veya resmi makamlarca alınmış kararlar veya herhangi bir kanun, emir, mevzuat veya düzenleme gibi Tarafların kontrolü haricinde vuku bulunan haller, iki Taraf için mücbir sebep sayılır. Türkiye’de ve/veya KULLANICI’nın CARGOPANEL’e erişim sağlamak istediği veya CARGOPANEL veri tabanının bulunduğu/depolandığı ülke/bölgede doğal afet, isyan, savaş, terör, grev, altyapı ve internet arızaları, enerji arıza ve kesintileri gibi mücbir sebep hallerinde gerçekleşen olası veri kayıplarından ve işbu SÖZLEŞME ile belirlenen yükümlülüklerden herhangi birinin geç veya eksik ifa edilmesi veya ifa edilmemesi nedeniyle CARGOPANEL sorumlu değildir. Bu ve bunun gibi durumlar, CARGOPANEL aleyhine, gecikme, eksik ifa etme veya ifa etmeme veya temerrüt addedilmeyecek veya bu durumlar için CARGOPANEL’ten herhangi bir nam altında tazminat talep edilemeyecektir.
                    </p>
                    <p className="gr-text-9">
                      9.2. Sözleşme kapsamında, Tarafların hiçbiri, tazminat yükümlülükleri hariç olmak üzere, Mücbir Sebep nedeniyle yükümlülüklerini yerine getirememekten veya gecikmeden dolayı sorumlu tutulmazlar. Tarafların sorumlu tutulmamaları için yükümlülüğü yerine getirmemenin veya gecikmenin, makul tedbirlerin alınmış olmasına rağmen önlenemeyecek nitelikte olması zorunludur.
                    </p>
                    <p className="gr-text-9">
                      9.3.Her bir Taraf Mücbir Sebebe dayanarak yükümlülükten kurtarılmasını isteyebilir. Bunun için sorumluluktan kurtulmak isteyen tarafın aşağıdaki eylemleri yapması gereklidir;
                    </p>
                    <p className="gr-text-9">
                      9.3.1. Zaman kaybetmeden, yükümlülükten kurtulma talebini Mücbir Sebep oluşturan olayın detaylarını, etkisinin ne kadar süreceğine dair tahminleri, yükümlülüğünü nasıl etkileyeceğine dair tahminlerini ve Mücbir Sebebin etkilerini azaltmak için yapılması gereken tedbir önerileri ile karşı tarafa bildirmek,
                    </p>
                    <p className="gr-text-9">
                      9.3.2. Mücbir Sebebi oluşturan olayın etkilerini azaltmak ve bir an önce yükümlülüklerini yerine getirmeye başlayabilmek için gereken makul bütün eylemleri mümkün olduğunda çabuk yerine getirmek.
                    </p>
                    <p className="gr-text-9">
                      9.4. Bu madde uyarınca Taraflar 60 (altmış) günden fazla süreyle yükümlülükten kurtulursa, bu Sözleşmeyi diğer Taraf’a yazılı bildirimde bulunmak suretiyle sona erdirebilir.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">10. KİŞİSEL VERİLERİN KORUNMASINA İLİŞKİN HÜKÜMLER</h3>
                    <p className="gr-text-9">
                      10.1. Taraflar, işbu Sözleşme’nin ifası amacı ile diğer Taraf’ın temsilcilerinin ya da çalışanlarının kimlik ve iletişim verisi gibi kişisel verilerinin işleneceği konusunda mutabıktır ve her bir Taraf, kendi çalışan ve/veya temsilcilerini bu konuda 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat uyarınca gerekli şekilde aydınlatacağını kabul ve beyan eder. Bu kapsamda her bir Taraf veri sorumlusu olarak işleyeceği bu kişisel veriler bakımından, diğer Taraf çalışanını ya da temsilcini ilk temasında 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat uyarınca gerekli şekilde aydınlatacağını kabul ve beyan eder.
                    </p>
                    <p className="gr-text-9">
                      10.2. Kişisel verilerin güvenliğinin sağlanması için Taraflar gerekli tüm teknik ve idari önlemleri almayı taahhüt eder. KULLANICI, UYGULAMA kapsamında işleyeceği kişisel verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu’na ve ilgili mevzuata uygun şekilde işlemeyi kabul ve taahhüt eder. KULLANICI ilgili kişilere veri sorumlusu olarak ilgili kişileri UYGULAMA kapsamında işleme faaliyetleri hakkında gerekli bilgilendirmeleri yapmakla yükümlüdür ve ilgili kanun ve mevzuattan doğan yükümlülüklerini yerine getireceğini kabul ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      10.3. CARGOPANEL, işbu Sözleşme kapsamında veri işleyen sıfatı ile yalnızca işbu Sözleşme’nin ifası amacı ile ve kapsamında sunulan UYGULAMA vasıtasıyla vereceği hizmetler kapsamında, veri işleyen olarak KULLANICI tarafından işlenen kişisel verileri işleyecek, kural olarak hizmetlerin ifası amacı haricinde, İÇERİK’e ve dahilindeki kişisel verilere erişimi kesinlikle mümkün olmayacaktır. CARGOPANEL tarafından kişisel verilerin Sözleşme’nin ifası amacı dışında işlenmesi, 3. kişilerle paylaşılması, reklam, satış ve benzeri amaçlarla kullanılması söz konusu olmayacaktır.
                    </p>
                    <p className="gr-text-9">
                      10.4. CARGOPANEL, kişisel verileri, ilişkide açıkça yetkilendirildiği haller veya bu tür verilerin açıklanmasının kanun, yönetmelik dahil mevzuat veya idari makam kararları ve/veya Sözleşme’nin gerektirdiği haller dışında, üçüncü kişilere hiçbir zaman açıklamayacak ve aktarmayacaktır.
                    </p>
                    <p className="gr-text-9">
                      10.5. CARGOPANEL, ilgili kişilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kendi kişisel verilerine ilişkin olarak çeşitli haklarının bulunduğunun farkındadır. İlgili kişilerin bu hakları kullanmaları halinde, buna ilişkin olarak mevzuatın izin verdiği ölçüde ve şekilde KULLANICI’nın bu kapsamda ileteceği talepleri dahilinde işlem yapacağını beyan ve taahhüt eder.
                    </p>
                    <p className="gr-text-9">
                      10.6. CARGOPANEL, KULLANICI tarafından kendisine iletilen kişisel verilere izinsiz erişim olması halinde; ilgili erişimi engellemek, söz konusu erişimin ilgili kişilere vereceği zararın azaltılması veya mümkünse yok edilebilmesini sağlamak için her türlü makul çalışmayı ve düzeltici işlemi derhal yapacak ve yapılan bu çalışmaların kaydını tutarak, KULLANICI’nın talebi halinde bu kayıtları KULLANICI’ya verecektir. CARGOPANEL, ayrıca Kurul’a ve ilgili kişilere yapılacak bildirimlerin hazırlanması konusunda KULLANICI’ya gerekli her türlü bilgileri vereceğini taahhüt eder. CARGOPANEL, Kurul’un söz konusu izinsiz erişim ile ilgili KULLANICI’dan birçok bilgi talep edebileceğinin, bu bilgilerin herhangi bir güvenlik eksikliği olup olmadığına ilişkin de olabileceğinin farkındadır ve Kurul tarafından KULLANICI’dan talep edilen tüm bu bilgileri KULLANICI’ya vermekle yükümlüdür. CARGOPANEL tarafından UYGULAMA kapsamında tutulan kişisel verilere, CARGOPANEL’in kusuru sebebiyle yetkisiz erişim durumunda; Kullanıcı ilgili kişilerin zararını tazmin etmek zorunda kalırsa (kesinleşmiş bir mahkeme kararı sonucunda), CARGOPANEL kesinleşmiş mahkeme kararına binaen söz konusu tazminat tutarını KULLANICI’ya ödeyecektir.
                    </p>
                    <p className="gr-text-9">
                      10.7. CARGOPANEL, herhangi bir güvenlik ihlalinden haberdar olması halinde bu durumu öğrenir öğrenmez mümkün olan en kısa sürede KULLANICI’ya bildirmekle yükümlüdür.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">11. İÇERİK’İN KORUNMASI VE BAKIM & DESTEK HİZMETLERİ</h3>
                    <p className="gr-text-9">
                      11.1. CARGOPANEL’e giriş yaparken kimlik doğrulaması için KULLANICI tarafından girilen CARGOPANEL e-posta ve şifre gibi bilgilerin doğruluğundan KULLANICI sorumlu olup girilen bilgilerdeki yanlışlıklardan CARGOPANEL sorumlu değildir.
                    </p>
                    <p className="gr-text-9">
                      11.2. CARGOPANEL’e yüklenen İÇERİK ve İÇERİK’in UYGULAMA’nın düzgün ve etkin işleyeceği şekilde doğru ve düzenli olarak yüklenmesi, KULLANICI’nın sorumluluğundadır. İÇERİK’in gerektiği şekilde yüklenmemiş olması sebebiyle, UYGULAMA’nın amacına uygun hizmeti verememesinden CARGOPANEL sorumlu değildir.
                    </p>
                    <p className="gr-text-9">
                      11.3. CARGOPANEL’in, KULLANICI’nın talebi kapsamında sunacağı Bakım & Destek hizmetleri ve hizmetin ifası için gerekli haller dışında, İÇERİK’e herhangi bir erişimi bulunmayacaktır. İÇERİK’in, VERİ MERKEZİ’nde güvenli olarak saklanması için gerekli makul önlemler CARGOPANEL tarafından alınmış ve/veya tedarikçisine aldırılmıştır.
                    </p>
                    <p className="gr-text-9">
                      11.4. KULLANICI, UYGULAMA’nın kullanımı sırasında karşılaştığı aksaklıkları CARGOPANEL’e bildirecek ve UYGULAMA hakkında geri bildirimde bulunacaktır.
                    </p>
                    <p className="gr-text-9">
                      11.5. CARGOPANEL, aşağıda belirtilen bakım ve destek hizmetlerini, kendisine bildirilen sorunun, öncelik ve önem sırasına göre işleme alarak aşağıdaki şekilde çözmeyi taahhüt eder:
                    </p>
                    <p className="gr-text-9">
                      11.5.1. Hizmetler, mesai saatleri içinde (09:00–18:00) arasında, rapor edilen hatanın aciliyet ve öncelik sırasına göre CARGOPANEL tarafından belirlenen sıra içerisinde sunulacaktır.
                    </p>
                    <p className="gr-text-9">
                      11.5.2. Hata düzeltmeleri ile ilgili sorunun giderilmesi için, KULLANICI’nın sisteme dışarıdan müdahale etmemiş olması gerekmektedir.
                    </p>
                    <p className="gr-text-9">
                      11.5.3. CARGOPANEL, rapor edilen teknik aksaklığa göre; uzaktan bağlantı yöntemi ve/veya gerekli gördüğü durumda telefonla canlı müdahalede bulunabilecektir. KULLANICI, rapor edilen aksaklığın giderilmesi için CARGOPANEL’in, UYGULAMA’ya dışarından erişim yapmasını ve bu amaç kapsamında İÇERİK’e de erişim sağlamasına izin vereceğini taahhüt etmektedir. KULLANICI’nın dışarıdan erişime izin vermemesi halinde, sorunun devam etmesinden CARGOPANEL sorumlu değildir.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">12. SÜRÜM / VERSİYON DEĞİŞTİRME, TEKNİK DESTEK VE KİŞİSELLEŞTİRME</h3>
                    <p className="gr-text-9">
                      12.1. CARGOPANEL, önceden haber vermeksizin UYGULAMA’da ve UYGULAMA dokümanlarında değişiklikler yapma, UYGULAMA’nın yeni versiyon ve sürümlerini çıkarma ve KULLANICILARDAN gelen geri bildirimler çerçevesinde UYGULAMA’yı geliştirme hakkına sahiptir. Ancak söz konusu geliştirmeleri yaparken KULLANICI, CARGOPANEL’in KULLANICI’nın talebi ve/veya onayı ile bağlı olmadığı konusunda mutabıktır.
                    </p>
                    <p className="gr-text-9">
                      12.2. UYGULAMA, CARGOPANEL tarafından kurgulandığı şekliyle KULLANICI’ya kullandırılmaktadır. Taraflarca açıkça yazılı olarak kararlaştırılmadıkça UYGULAMA çerçevesinde herhangi bir kişiselleştirme hizmeti verilmez. KULLANICI’nın UYGULAMA’nın kişiselleştirilmesine ilişkin herhangi bir talebi olur ise, bu isteğini CARGOPANEL’ya iletebilecek ve söz konusu hizmet, ücret ve hizmet koşulları üzerinde mutabık kalınması karşılığında verilecektir.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">13. SÖZLEŞMENİN SONA ERMESİ VE FESHİ</h3>
                    <p className="gr-text-9">
                      13.1. İşbu SÖZLEŞME uyarınca CARGOPANEL’i kullanma hakkı, (a) KULLANICI’nın CARGOPANEL’i kullanmayı sona erdirmesi ve çıkış talimatlarına uyarak HESABI sona erdirmesi (b) KULLANICI’nın CARGOPANEL ile arasındaki SÖZLEŞME’nin ve/veya ilgili eklerinin herhangi bir nedenle sona ermesi ile işbu madde kapsamında düzenlenen çıkış prosedürüne uygun şekilde sona erer. TARAFLAR, işbu SÖZLEŞME’yi 1 (üç) ay önceden yazılı önel vermek suretiyle her zaman feshetme hakkını saklı tutar. SÖZLEŞME’nin feshi halinde CARGOPANEL tarafından ücret iadesi söz konusu olmayacaktır.
                    </p>
                    <p className="gr-text-9">
                      13.2. CARGOPANEL, KULLANICI’nın yasadışı veri saklaması ve paylaşması, faaliyetlerinin hukuki, teknik ve bilgi güvenliği anlamında risk oluşturması, herhangi bir şekilde yasalara aykırı davranması ve/veya işbu SÖZLEŞME hükümlerinden birini ihlal etmesi halinde sağlanan hizmetleri kısmen veya tamamen geçici veya sürekli olarak askıya alabilir veya tek taraflı olarak SÖZLEŞME’yi derhal feshedebilir. KULLANICI, söz konusu hallerde CARGOPANEL aleyhine herhangi bir hak iddia edemez ve tazminat talebinde bulunamaz.
                    </p>
                    <p className="gr-text-9">
                      13.3. Sözleşme’nin KULLANICI tarafından feshedilmesi halinde, KULLANICI yararlandığı hizmetlere ilişkin ücretlerin iadesini talep edemeyecektir.
                    </p>
                    <p className="gr-text-9">
                      13.4. SÖZLEŞME’nin her ne sebeple olursa olsun sona ermesi üzerine KULLANICI’nın UYGULAMA’ya erişimi de sona erecektir.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">14. TÜKETİCİ OLAN KULLANICILARA İLİŞKİN EK HÜKÜMLER</h3>
                    <p className="gr-text-9">
                      14.1. CAYMA HAKKI
                    </p>
                    <p className="gr-text-9">
                      14.1.1. UYGULAMA, herhangi bir hizmet satın alınmadığı sürece ücretsiz olarak sunulmaktadır.
                    </p>
                    <p className="gr-text-9">
                      14.1.2. KULLANICI; UYGULAMA’nın kullanılmaya başlandığı tarihinden itibaren 14 (ondört) gün içerisinde, CARGOPANEL’e bildirmek şartıyla hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin bu sözleşme’den cayma hakkını kullanabilir. KULLANICI, işbu Sözleşmeyi kabul etmekle, cayma hakkı konusunda bilgilendirildiğini kabul eder.
                    </p>
                    <p className="gr-text-9">
                      Cayma hakkı bulunan hallerde KULLANICI'nın cayma hakkını kullandığına dair açık bir bildirimi 14 (ondört) günlük süre içinde CARGOPANEL'e info@CARGOPANEL.CO e-posta adresi üzerinden yöneltmiş olması yeterlidir.
                    </p>
                    <p className="gr-text-9">
                      14.2. KULLANICI'NIN KANUNİ BAŞVURU YOLLARI - YETKİLİ YARGI MERCİLERİ
                    </p>
                    <p className="gr-text-9">
                      14.3.1. KULLANICI, Site üzerinden SÖZLEŞME’yi kabul ederek ve/veya seçtiği HİZMETLER’e ilişkin ödemeyi gerçekleştirdiğinde işbu SÖZLEŞME’nin tüm şartlarını kabul etmiş sayılır.
                    </p>
                    <p className="gr-text-9">
                      14.3.2. KULLANICI, işbu SÖZLEŞME'de ve ayrılmaz parçasını oluşturan SİTE’de yer alan ön bilgilendirmelerinde yazılı tüm koşulları ve açıklamaları okuduğunu, satışa konu UYGULAMA’nın temel özellik-nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları ile ilgili diğer tüm ön bilgiler-bilgilendirmeler ve cayma hakkı ile kişisel bilgiler-elektronik iletişim koşulları dahil bütün hususlarda önceden bilgi sahibi olduğunu, tamamını Site'de elektronik ortamda gördüğünü ve yine tüm bunlara elektronik ortamda teyit-onay-kabul-iznini vererek UYGULAMA’yı kullanmak ile işbu Sözleşme hükümlerini kabul ettiğini kabul ve beyan eder.
                    </p>
                    <p className="gr-text-9">
                      14.3.3. Gerek söz konusu ön bilgilendirmeler, gerek bu Sözleşme, KULLANICI'nın CARGOPANEL'e bildirdiği e-posta adresine de gönderilmekte, anılan elektronik postada siparişin alındığı teyidi sipariş özeti ile birlikte ayrıca yer almaktadır.
                    </p>
                    <p className="gr-text-9">
                      14.3. YÜRÜRLÜK
                    </p>
                    <p className="gr-text-9">
                      14.3.1. KULLANICI, Site üzerinden SÖZLEŞME’yi kabul ederek ve/veya seçtiği HİZMETLER’e ilişkin ödemeyi gerçekleştirdiğinde işbu SÖZLEŞME’nin tüm şartlarını kabul etmiş sayılır.
                    </p>
                    <p className="gr-text-9">
                      14.3.2. KULLANICI, işbu SÖZLEŞME'de ve ayrılmaz parçasını oluşturan SİTE’de yer alan ön bilgilendirmelerinde yazılı tüm koşulları ve açıklamaları okuduğunu, satışa konu UYGULAMA’nın temel özellik-nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları ile ilgili diğer tüm ön bilgiler-bilgilendirmeler ve cayma hakkı ile kişisel bilgiler-elektronik iletişim koşulları dahil bütün hususlarda önceden bilgi sahibi olduğunu, tamamını Site'de elektronik ortamda gördüğünü ve yine tüm bunlara elektronik ortamda teyit-onay-kabul-iznini vererek UYGULAMA’yı kullanmak ile işbu Sözleşme hükümlerini kabul ettiğini kabul ve beyan eder.
                    </p>
                    <p className="gr-text-9">
                      14.3.3. Gerek söz konusu ön bilgilendirmeler, gerek bu Sözleşme, KULLANICI'nın CARGOPANEL'e bildirdiği e-posta adresine de gönderilmekte, anılan elektronik postada siparişin alındığı teyidi sipariş özeti ile birlikte ayrıca yer almaktadır.
                    </p>
                  </div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3">15. DİĞER HÜKÜMLER</h3>
                    <p className="gr-text-9">
                      15.1. İşbu SÖZLEŞME ve SÖZLEŞME’nin yerine getirilmesi ve yorumu ile ilgili olarak ortaya çıkabilecek her türlü ihtilafın çözümü Türk Hukukuna tabi olacak ve İstanbul Adliyesi Mahkemeleri ve İcra Daireleri münhasır yetkiye sahip olacaktır.
                    </p>
                    <p className="gr-text-9">
                      15.2. Şayet işbu SÖZLEŞME’nin herhangi bir hükmü hukuksuz, geçersiz veya uygulanamaz addedilirse, bu kısım bu çerçevede SÖZLEŞME’nin kısmı sayılmaz ve SÖZLEŞME’nin diğer maddelerinin hukukiliğini, geçerliliğini ve uygulanabilirliğini etkilemez ve SÖZLEŞME’nin diğer hükümleri yürürlüğünü ve etkisini sürdürür, meğerki işbu hükmün uygulanması TARAFLAR’ın işbu SÖZLEŞME’deki ticari niyetlerini ve amaçlarını ortadan kaldırsın.
                    </p>
                    <p className="gr-text-9">
                      15.3. CARGOPANEL, işbu SÖZLEŞME kapsamındaki yükümlülüklerini veya haklarını tamamen kendi takdirinde olmak üzere kısmen veya tamamen başkalarına devir ve temlik edebilir veya alt sözleşme yapabilir.
                    </p>
                    <p className="gr-text-9">
                      15.4. İşbu Sözleşme kapsamında meydana gelebilecek uyuşmazlıklarda HMK Madde 193 uyarınca CARGOPANEL’in kayıtları (elektronik ortamda tutulan kayıtlar dahil) delil kabul edilecektir.
                    </p>
                    <p className="gr-text-9">
                      15.5. İşbu SÖZLEŞME’nin herhangi bir hükmünden feragat, ancak ve ancak yazılı olması ve CARGOPANEL tarafından kabul edilmesi şartı ile geçerli olacaktır.
                    </p>
                    <p className="gr-text-9">
                      15.6. İşbu SÖZLEŞME içinde kullanılan bölümler ve başlıklar SÖZLEŞME’nin yapısı ile ilgili olup içeriğine etki etmez.
                    </p>
                  </div>
                  <div className="single-block">
                    <h3 className="gr-text-8 font-weight-bold pb-3">16. YÜRÜRLÜK</h3>
                    <p className="gr-text-9">
                      İşbu SÖZLEŞME’nin KULLANICI tarafından elektronik ortamda onaylanması durumunda KULLANICI, SÖZLEŞME’nin tüm koşullarını kabul etmiş sayılacak ve SÖZLEŞME bahsi geçen onay işlemi ile beraber yürürlüğe girecektir.
                    </p>
                  </div>

                  {/*<p className="gr-text-9"></p>*/}
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
