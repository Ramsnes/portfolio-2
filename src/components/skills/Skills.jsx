// src\components\skills\Skills.jsx
import { skillsData } from "./skillsData";

export const Skills = () => {
  return (
    <div className="grid w-full gap-5 m-auto md:grid-cols-2 md:gap-5 border-y-2 py-10 border-black">
      {/* Skills */}
      <div className="languages grid grid-cols-2 gap-4 fadeInL order-2 md:order-1 ">
        {skillsData.map((skill) => (
          <div className="language" key={skill.id}>
            <img
              src={skill.icon}
              alt={skill.alt}
              className="w-20 h-20 mx-auto"
            />
          </div>
        ))}
      </div>

      <div className="fadeInR order-1 md:order-2 grid  text-center ">
        <h2 className="text-2xl">My skills and utility experience</h2>
        <p>
          After two years of focused learning, I`ve developed some decent skills
          in HTML and CSS. I`m continually improving in JavaScript, and React
          has become a favorite tool of mine for building efficient,
          component-based apps. I have some experience in Wordpress, and I`m
          currently learning Tailwind CSS, which I prefer over Bootstrap for its
          flexibility. While design isn`t my main focus, I`m comfortable using
          Figma to translate ideas into functional layouts.
        </p>
      </div>
    </div>
  );
};
