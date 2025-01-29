import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import FloatingElements from '@/components/FloatingElements';
import './page.css';
import Link from 'next/link';

const AllProjects = () => {
    return (
        <div className="app-container">
            <FloatingElements />
            <div className="all-projects">
                <div className="about-card">
                    <Link href="/" className="back-link">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <div className="projects-header">
                        <h1 className="projects-title">All Projects</h1>
                        <p className="projects-subtitle">
                            A comprehensive collection of my work across various technologies and domains
                        </p>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;