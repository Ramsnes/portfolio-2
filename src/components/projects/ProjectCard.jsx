// src/components/ProjectCard.jsx
import { ImageCard } from "../ImageCard";
import githubLogo from "../../../images/gh1.png";
import netlifyLogo from "../../../images/live1.png";

export const ProjectCard = ({
  image,
  alt,
  title,
  description,
  repo,
  deployment,
}) => {
  return (
    <div className="mb-10 border-b-2 py-10 border-black">
      <div className="flex flex-col md:flex-row-reverse   ">
        <div className="md:flex md:flex-col md:w-1/2   md:h-full">
          <h2 className="text-2xl text-center mb-5">{title}</h2>
          <p className="m-5 md:m-0">{description}</p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <ImageCard src={image} alt={alt} />
        </div>
      </div>

      {/* Links */}
      <div className="flex space-x-4 justify-end mr-10">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src={githubLogo} alt="Github Logo" className="w-20 h-auto" />
        </a>
        <a
          href={deployment}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src={netlifyLogo} alt="Netlify Logo" className="w-20 h-auto" />
        </a>
      </div>
      {/* Links end */}
    </div>
  );
};
