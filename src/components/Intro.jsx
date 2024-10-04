// Intro.jsx
import mortenRamfjord from "../assets/pfb-cropped.jpg";

export const Intro = () => {
  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      <div className="intro-container group flex flex-col justify-start md:text-left md: md:h-5/6 lg:h-5/6">
        <h2 className="text-2xl">About me</h2>
        <p className="intro-paragraph fadeInL">
          I’m a front-end developer with a passion for building efficient,
          dynamic web applications. After two years at Noroff University, I’ve
          developed strong skills in HTML, CSS, and JavaScript. My favorite
          tools are React and Tailwind CSS, which I use to create flexible,
          component-based apps. I currently work at digiPublishing and continue
          to expand my skills, always looking for new challenges and
          opportunities to grow.
        </p>
      </div>
      <img
        className="fadeInR w-full col-span-1 md:rounded-s"
        src={mortenRamfjord}
        alt="Morten Ramfjord profile picture"
      />
    </div>
  );
};
