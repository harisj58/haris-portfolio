import React from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import "./ProjectCard.css";
import Link from "next/link";

const ProjectCard = ({ project, showViewAll }) => {
  return (
    <div className="project-card">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="project-image"
      />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.shortDescription}</p>
      <div className="tag-container">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <Link href={`/projects/${project.id}`} className="project-link">
          View Details <ArrowRight size={16} />
        </Link>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github size={16} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
