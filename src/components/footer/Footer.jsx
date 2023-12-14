import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex justify-around text-white py-4">
      <div className="info flex flex-col gap-4 justify-center">
        <a href="tel:+905446808618">
          <i className="fa-solid fa-phone fa-2x me-3"></i>0544 680 8618
        </a>
        <a href="mailto:salihbstg01@gmail.com">
          <i className="fa-regular fa-envelope fa-2x me-3"></i>
          salihbstg01@gmail.com
        </a>
      </div>
      <div className="links flex flex-col gap-4 justify-center">
        <a href="https://github.com/salihbstg" target="_blank">
          <i className="fa-brands fa-github me-3 fa-2x"></i>Github
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/salih-bastug/">
          <i className="fa-brands fa-linkedin fa-2x me-3"></i>Linkedin
        </a>
      </div>
      <div className="description flex flex-col gap-4 justify-center">
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-check fa-2x text-blue-500"></i>
          <span>Bilgisayar Bilimleri</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-check fa-2x text-blue-500"></i>
          <span>Web Tasarım</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-check fa-2x text-blue-500"></i>
          <span>Kodlama</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-check fa-2x text-blue-500"></i>
          <span>Müşteri Memnuniyeti</span>
        </div>
        <div className="flex gap-3 items-center">
          <i className="fa-solid fa-check fa-2x text-blue-500"></i>
          <span>Ceo Hizmetleri</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
