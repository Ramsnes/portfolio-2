// components/Skills.jsx
export const Skills = () => {
  return (
    <div className="flex flex-row m-auto w-full gap-3">
      <div className="languages grid grid-flow-row w-1/2 grid-cols-2 gap-4 fadeInL">
        <div className="language html"></div>
        <div className="language css"></div>
        <div className="language js"></div>
        <div className="language wp"></div>
        <div className="language react"></div>
        <div className="language tailwind"></div>
        <div className="language bootstrap"></div>
        <div className="language figma"></div>
      </div>
      <div className="w-1/2">
        <p>My main skills and utilities used are</p>
        <p>My job description and languages we use</p>
        <p>Write code in JS React and php</p>
      </div>
    </div>
  );
};
