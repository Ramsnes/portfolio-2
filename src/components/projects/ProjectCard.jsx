// src/components/ProjectCard.jsx
import { ImageCard } from "../ImageCard";
import githubLogo from "../../../images/GitHub_Logo.png";
import netlifyLogo from "../../../images/github.svg";

export const ProjectCard = ({
  image,
  alt,
  title,
  description,
  repo,
  deployment,
}) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row-reverse  md:border md:border-black  ">
        <div className="md:flex md:flex-col md:w-1/2 md:border md:border-black md:h-full">
          <h2 className="text-2xl text-center mb-5">{title}</h2>
          <p className="m-5 md:m-0">{description}</p>
        </div>
        <div className="md:w-1/2 md:border md:border-black">
          <ImageCard src={image} alt={alt} />
        </div>
      </div>

      {/* Links */}
      <div className="flex space-x-4 justify-end">
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github Logo" className="w-8 h-8" />
        </a>
        <a href={deployment} target="_blank" rel="noopener noreferrer">
          <img src={netlifyLogo} alt="Netlify Logo" className="w-8 h-8" />
        </a>
      </div>
      {/* Links end */}
    </div>
  );
};
