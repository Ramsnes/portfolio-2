// Intro.jsx
import mortenRamfjord from "../assets/pfb-cropped.jpg";

export const Intro = () => {
  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      <div className="intro-container group flex flex-col justify-start md:text-left md:h-5/6 lg:h-5/6 order-2 md:order-1 gap-5">
        <h2 className="text-2xl p-5">About me</h2>
        <p className="intro-paragraph fadeInL">
          I’m a front-end developer passionate about building dynamic and
          efficient web applications. After completing two years at Noroff
          University, I continue to develop my expertise in HTML, CSS,
          JavaScript, and various libraries and frameworks. Currently, I work at
          digiPublishing in Trondheim, where I am kick-starting my career, eager
          to embrace new challenges and opportunities to grow as a developer.
        </p>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2">
        <img
          className="fadeInR w-full md:w-2/3 md:rounded-s"
          src={mortenRamfjord}
          alt="Morten Ramfjord profile picture"
        />
      </div>
    </div>
  );
};
