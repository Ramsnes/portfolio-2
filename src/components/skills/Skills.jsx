// src\components\skills\Skills.jsx
import { skillsData } from "./skillsData";

export const Skills = () => {
  return (
    <div className="grid w-full gap-3 m-auto md:grid-cols-2 md:gap-5 border-y-2 md:py-10 border-black">
      {/* Skills */}
      <div className="languages grid grid-cols-2 gap-4 fadeInL order-2 md:order-1">
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

      <div className="fadeInR order-1 md:order-2">
        <p>My main skills and utilities used are</p>
        <p>My job description and languages we use</p>
        <p>Write code in JS, React, and PHP</p>
      </div>
    </div>
  );
};
