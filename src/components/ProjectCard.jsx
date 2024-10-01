// src/components/ProjectCard.jsx
import { ImageCard } from "./ImageCard";
import githubLogo from "../../images/GitHub_Logo.png";
import netlifyLogo from "../../images/github.svg";

export const ProjectCard = ({
  image,
  alt,
  title,
  description,
  repo,
  deployment,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ImageCard src={image} alt={alt} />
      <div className="flex space-x-4">
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github Logo" className="w-8 h-8" />
        </a>
        <a href={deployment} target="_blank" rel="noopener noreferrer">
          <img src={netlifyLogo} alt="Netlify Logo" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};
