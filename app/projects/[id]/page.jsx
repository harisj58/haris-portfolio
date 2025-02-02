"use client";

import React from "react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../../../data/projects";
import FloatingElements from "../../../components/FloatingElements";
import "./page.css";
import Link from "next/link";

const ProjectDetail = ({ params }) => {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="app-container sm:px-4 md:px-6 lg:px-8">
      <FloatingElements />
      <div className="project-detail sm:px-2">
        <div className="about-card sm:p-4 md:p-6">
          <Link href="/projects" className="back-link sm:mb-3">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="project-header">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-hero sm:h-64 md:h-72 lg:h-96"
            />
            <h1 className="hero-title sm:text-3xl md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <div className="tag-container sm:gap-1 md:gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag sm:text-xs md:text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="project-meta sm:flex-col md:flex-row">
            <div className="meta-section sm:w-full md:w-auto">
              <h3 className="meta-title">DATE</h3>
              <p className="meta-content">{project.date}</p>
            </div>
            <div className="meta-section sm:w-full md:w-auto">
              <h3 className="meta-title">LINKS</h3>
              <div className="project-links sm:flex-col md:flex-row">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link sm:w-full md:w-auto"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link sm:w-full md:w-auto"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="project-section sm:mb-4 md:mb-6">
            <h2 className="section-title sm:text-xl md:text-2xl">Overview</h2>
            <p className="section-content sm:text-sm md:text-base">
              {project.fullDescription}
            </p>
          </div>

          <div className="project-section sm:mb-4 md:mb-6">
            <h2 className="section-title sm:text-xl md:text-2xl">
              Technologies Used
            </h2>
            <div className="tech-list sm:gap-1 md:gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tag sm:text-xs md:text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project?.challenges && project?.solutions ? (
            <div className="project-section sm:mb-4 md:mb-6">
              <h2 className="section-title sm:text-xl md:text-2xl">
                Challenges & Solutions
              </h2>
              <div className="section-content">
                <h3 className="meta-title">CHALLENGES</h3>
                <ul className="list-disc pl-5 mb-4 sm:text-sm md:text-base">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="mb-2">
                      {challenge}
                    </li>
                  ))}
                </ul>
                <h3 className="meta-title">SOLUTIONS</h3>
                <ul className="list-disc pl-5 sm:text-sm md:text-base">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="mb-2">
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="project-section sm:mb-4 md:mb-6">
            <h2 className="section-title sm:text-xl md:text-2xl">
              Key Learnings
            </h2>
            <ul className="list-disc pl-5 sm:text-sm ml-10 md:text-base">
              {project.learnings.map((learning, index) => (
                <li key={index} className="mb-2 section-content">
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
