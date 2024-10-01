// src/components/projects/MappedProjects.jsx
import { ProjectCard } from "../ProjectCard";
import { projectsData } from "./projectsData";

// Job: takes in arr 'projectsData' and uses comp 'ProjectCard's' JSX outlay
// For each project object in the array, it creates a new ProjectCard component.
export const MappedProjects = () => {
  return (
    <div>
      {projectsData.map((p) => (
        <ProjectCard
          key={p.id}
          title={p.title}
          image={p.image}
          alt={p.alt}
          description={p.description}
          repo={p.repo}
          deployment={p.deployment}
        />
      ))}
    </div>
  );
};
