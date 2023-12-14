import "./Hero.css";
const Hero = () => {
  return (
    <section id="hero" className="hero z-0 flex justify-center mt-4  h-[6 0vh] border-b-2 border-black rounded-[120px] items-center">
      <div className="hero-text ps-24">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl">Salihcan Baştuğ</h1>
          <h2 className="text-5xl">Front-End Developer</h2>
        </div>
      </div>
      <div className="hero-img">
        <img src="./hero.png" className="w-full" alt="" />
      </div>
    </section>
  );
};

export default Hero;
