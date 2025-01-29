"use client"

import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import FloatingElements from './FloatingElements';
import './Hero.css';

function Hero() {
    const titles = ["Software Developer", "ML Engineer", "AI Enhanced Human"];

    const heroAbout = ["Building intelligent solutions through code. Specializing in machine learning and backend development.", "I flip transistors and live in O(n) time."]

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="app-container">
            <FloatingElements />

            {/* Hero Section */}
            < section id="hero" className="section" >
                <div className="section-container">
                    <div className="hero-card">
                        <h1 className="hero-title">
                            Haris Javed
                        </h1>
                        <h2 className="hero-subtitle">
                            <TypewriterEffect words={titles} />
                        </h2>
                        <p className="hero-description">
                            {heroAbout[0]}
                        </p>
                        <button
                            onClick={() => scrollTo("contact")}
                            className="cta-button"
                        >
                            Get in Touch
                            <ChevronDown size={20} className="chevron-icon" />
                        </button>
                    </div>
                </div>
            </section >

            {/* About Section */}
            < section id="about" className="about-section" >
                <div className="about-container">
                    <div className="about-card">
                        <h2 className="about-title">
                            About Me
                        </h2>
                        <div className="about-text">
                            <p>
                                {`With over [X] years of experience in software development and machine learning,
                                I've dedicated my career to building intelligent solutions that solve real-world problems.`}
                            </p>
                            <div className="about-grid">
                                <div className="skill-card">
                                    <h3 className="skill-title">Machine Learning Experience</h3>
                                    <ul className="skill-list">
                                        <li>Deep learning model development and deployment</li>
                                        <li>Natural Language Processing applications</li>
                                        <li>Computer Vision solutions</li>
                                        <li>MLOps and model optimization</li>
                                    </ul>
                                </div>
                                <div className="skill-card">
                                    <h3 className="skill-title">Software Development</h3>
                                    <ul className="skill-list">
                                        <li>Full-stack web application development</li>
                                        <li>Microservices architecture</li>
                                        <li>Cloud infrastructure and DevOps</li>
                                        <li>API design and development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Projects Section */}
            < section id="projects" className="about-section" >
                <div className="about-container">
                    <div className="about-card">
                        <h2 className="about-title">
                            Featured Projects
                        </h2>
                        <div className="projects-grid">
                            <div className="project-card">
                                <h3 className="project-title">Project Name</h3>
                                <p className="project-description">
                                    Project description goes here. Explain what the project does and its impact.
                                </p>
                                <div className="tag-container">
                                    <span className="tag">Tech Stack</span>
                                </div>
                                <a href="#" className="project-link">
                                    View Project
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Skills Section */}
            < section id="skills" className="about-section" >
                <div className="about-container">
                    <div className="about-card">
                        <h2 className="about-title">
                            Technical Skills
                        </h2>
                        <div className="skills-grid">
                            {['Machine Learning', 'Programming', 'Tools & Technologies'].map((category) => (
                                <div key={category} className="skill-card">
                                    <h3 className="category-title">{category}</h3>
                                    <ul className="skill-list">
                                        {category === 'Machine Learning' ? (
                                            <>
                                                <li>TensorFlow / PyTorch</li>
                                                <li>Scikit-learn</li>
                                                <li>Computer Vision</li>
                                                <li>Natural Language Processing</li>
                                                <li>Deep Learning</li>
                                            </>
                                        ) : category === 'Programming' ? (
                                            <>
                                                <li>Python</li>
                                                <li>JavaScript / TypeScript</li>
                                                <li>React.js</li>
                                                <li>Node.js</li>
                                                <li>SQL</li>
                                            </>
                                        ) : (
                                            <>
                                                <li>Docker</li>
                                                <li>Git</li>
                                                <li>AWS / GCP</li>
                                                <li>CI/CD</li>
                                                <li>Linux</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact Section */}
            < section id="contact" className="contact-section" >
                <div className="contact-container">
                    <div className="about-card">
                        <h2 className="about-title">
                            {`Let's Connect`}
                        </h2>
                        <p className="hero-description">
                            Feel free to reach out for collaborations or just a friendly chat.
                        </p>
                        <div className="social-links">
                            {[
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Mail, href: "#" }
                            ].map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="social-link"
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Hero;