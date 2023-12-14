import "./About.css";
const About = () => {
  return (
    <section id="about" className="about mt-14">
      <div className="about-images flex justify-center pt-2 gap-3">
        <div className="image-anim">
          <img
            className="w-[100%]"
            src="hakkimdaF1.jpg"
            alt=""
          />
        </div>
        <div className="image-anim ">
          <img
            className="w-[100%]"
            src="hakkimdaF2.jpg"
            alt=""
          />
        </div>
        <div className="image-anim">
          <img
            className="w-[100%]"
            src="hakkimdaF3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="about-text w-[50%] mx-auto">
        <h3 className="text-center text-5xl mt-10 ">HAKKIMDA</h3>
        <div className="h-[1px] w-[50vw] mx-auto border-b border-black my-4"></div>

        <p>
          Kendimi size tanıtmaktan büyük bir mutluluk duyuyorum. Benim adım
          Salih, Bilgisayar Mühendisliği alanında lisans mezunuyum. Web
          tasarımına olan tutkum, her bir projeyi adeta bir sanat eserine
          dönüştürme arzumu güçlendiriyor. Her markanın benzersiz hikayesini
          dijital dünyada etkileyici bir şekilde anlatmak adına tasarım
          becerilerimi kullanıyorum.
        </p>

        <p>
          Web sitelerini kullanıcı dostu, mobil uyumlu ve estetik açıdan çekici
          hale getirerek, işletmelerin çevrimiçi varlıklarını güçlendirmeyi
          hedefliyorum. Sizinle birlikte çalışmak ve dijital dünyada başarınıza
          katkıda bulunmak için sabırsızlanıyorum.
        </p>

        <p>
          Her projeye özel bir yaklaşım benimsemek ve müşterilerimin
          beklentilerini aşmak benim için önemlidir. İster bir işletme sahibi
          olun, ister kişisel bir projeniz olsun, benim amacım sizin vizyonunuzu
          gerçeğe dönüştürmek ve çevrimiçi dünyada fark yaratmanıza yardımcı
          olmaktır.
        </p>

        <p>
          Siz de benimle birlikte çalışarak dijital varlığınızı güçlendirmek ve
          kullanıcı deneyimini en üst düzeye çıkarmak istiyorsanız, birlikte
          harika işlere imza atabiliriz. İlginiz için teşekkür eder, yakın
          zamanda sizinle iletişime geçmeyi umarım.
        </p>
        <p className="float-right">Salihcan Baştuğ</p>
      </div>
    </section>
  );
};

export default About;
