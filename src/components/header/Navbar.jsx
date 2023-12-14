import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav mt-1 border-b sticky top-0 border-black pb-8 rounded-[50%] z-10 flex justify-around w-[90%] mx-auto items-start px-28">
      <div className="logo">
        <h2 className="text-5xl cursor-default border-t-2 p-1 rounded-md border-black shadow-lg shadow-black">
          SCB
        </h2>
      </div>
      <div className="links">
        <ul className="links-ul flex">
          <li>
            <a href="#hero">
              <i className="fa-solid fa-house fa-2x me-2 pt-2"></i>Anasayfa
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fa-solid fa-info fa-2x me-2 pt-2"></i>Hakkımda
            </a>
          </li>
          <li>
            <a href="#skills">
              <i className="fa-solid fa-code fa-2x me-2 pt-2"></i>Yetenekler
            </a>
          </li>
          <li>
            <a href="#github">
              <i className="fa-brands fa-github fa-2x me-2 pt-2"></i>Github
            </a>
          </li>
          <li>
            <a href="#mail">
              <i className="fa-regular fa-envelope fa-2x me-2 pt-2"></i>Mail
            </a>
          </li>
          <li className="relative game">
            <a href="#">
              <i className="fa-solid fa-gamepad fa-2x me-2 pt-2"></i>Oyunlar{" "}
              <i className="fa-solid fa-chevron-down"></i>
            </a>
            <div className="games absolute flex gap-5 items-center top-10 right-[-20px] px-10 mt-1 py-9">
              <a href="./../../../Drum Kit Starting Files/index.html" target="_blank">Bateri</a>
              <a href="./../../../Piano/piano.html" target="_blank">Piano</a>
            </div>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
