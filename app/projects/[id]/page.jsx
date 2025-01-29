"use client"

import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../../../data/projects';
import FloatingElements from '../../../components/FloatingElements';
import './page.css';
import Link from 'next/link';

const ProjectDetail = ({ params }) => {

    const project = projects.find(p => p.id === params.id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="app-container">
            <FloatingElements />
            <div className="project-detail">
                <div className="about-card">
                    <Link href="/projects" className="back-link">
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>

                    <div className="project-header">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="project-hero"
                        />
                        <h1 className="hero-title">{project.title}</h1>
                        <div className="tag-container">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="project-meta">
                        <div className="meta-section">
                            <h3 className="meta-title">DATE</h3>
                            <p className="meta-content">{project.date}</p>
                        </div>
                        <div className="meta-section">
                            <h3 className="meta-title">LINKS</h3>
                            <div className="project-links">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="project-section">
                        <h2 className="section-title">Overview</h2>
                        <p className="section-content">{project.fullDescription}</p>
                    </div>

                    <div className="project-section">
                        <h2 className="section-title">Technologies Used</h2>
                        <div className="tech-list">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="project-section">
                        <h2 className="section-title">Challenges & Solutions</h2>
                        <div className="section-content">
                            <h3 className="meta-title">CHALLENGES</h3>
                            <ul className="list-disc pl-5 mb-4">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="mb-2">{challenge}</li>
                                ))}
                            </ul>
                            <h3 className="meta-title">SOLUTIONS</h3>
                            <ul className="list-disc pl-5">
                                {project.solutions.map((solution, index) => (
                                    <li key={index} className="mb-2">{solution}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="project-section">
                        <h2 className="section-title">Key Learnings</h2>
                        <ul className="list-disc pl-5">
                            {project.learnings.map((learning, index) => (
                                <li key={index} className="mb-2 section-content">{learning}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;