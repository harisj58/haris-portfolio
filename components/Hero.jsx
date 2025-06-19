"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  ChevronDown,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import FloatingElements from "./FloatingElements";
import "./Hero.css";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ExperienceTimeline from "./ExperienceTimeline";
import { projects } from "../data/projects";
import { experiences, experiencesByCompany } from "../data/experience";

const getFeaturedCompanyGroups = () => {
  const featuredGroups = {};

  Object.values(experiencesByCompany).forEach((companyGroup) => {
    const featuredExperiences = companyGroup.experiences.filter(
      (exp) => exp.featured
    );
    if (featuredExperiences.length > 0) {
      featuredGroups[companyGroup.company] = {
        ...companyGroup,
        experiences: featuredExperiences,
      };
    }
  });

  return Object.values(featuredGroups);
};

function Hero() {
  const titles = ["Software Developer", "ML Engineer", "AI Enhanced Human"];
  const featuredProjects = projects.filter((project) => project.featured);
  const featuredExperiences = experiences.filter(
    (experience) => experience.featured
  );

  const currentYear = new Date().getFullYear();

  const heroAbout = [
    "Building intelligent solutions through code. Specializing in machine learning and backend development.",
    "I flip transistors and live in O(n) time.",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <FloatingElements />

      {/* Hero Section */}
      <section id="hero" className="section">
        <div className="section-container">
          <div className="hero-card">
            <h1 className="hero-title">Haris Javed</h1>
            <h2 className="hero-subtitle">
              <TypewriterEffect words={titles} />
            </h2>
            <p className="hero-description">{heroAbout[0]}</p>
            <button onClick={() => scrollTo("contact")} className="cta-button">
              Get in Touch
              <ChevronDown size={20} className="chevron-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h2 className="about-title">About Me</h2>
            <div className="about-text">
              <p>
                {`With just under a year of experience in software development and machine learning,
                                I've dedicated my career to building intelligent solutions that solve real-world problems.`}
              </p>
              <div className="about-grid">
                <div className="skill-card">
                  <h3 className="skill-title">Machine Learning Experience</h3>
                  <ul className="skill-list">
                    <li>
                      Developing and deploying advanced deep learning models
                      (NLP & CV)
                    </li>
                    <li>
                      Building chatbots with LLM integration (agentic RAG,
                      function calling)
                    </li>
                    <li>
                      Optimizing machine learning models for real-time
                      performance
                    </li>
                    <li>
                      Speech-to-speech streaming with low latency using
                      WebSockets
                    </li>
                    <li>
                      End-to-end MLOps pipelines for model deployment and
                      optimization
                    </li>
                  </ul>
                </div>
                <div className="skill-card">
                  <h3 className="skill-title">Software Development</h3>
                  <ul className="skill-list">
                    <li>Full-stack development with Next.js and FastAPI</li>
                    <li>Building scalable microservices architecture</li>
                    <li>
                      Integrating Cloud platforms (GCP, Firebase, MongoDB,
                      Vercel)
                    </li>
                    <li>
                      API design and real-time data handling using WebSockets
                    </li>
                    <li>Server-side rendering and SEO optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h2 className="about-title">Work Experience</h2>
            <div className="company-experiences-container">
              {getFeaturedCompanyGroups().map((companyGroup, index) => (
                <div
                  key={companyGroup.company}
                  className="company-experience-mini"
                >
                  <div className="company-header-mini">
                    <img
                      src={companyGroup.companyLogo}
                      alt={`${companyGroup.company} logo`}
                      className="company-logo-mini"
                    />
                    <div className="company-info-mini">
                      <h3 className="company-name-mini">
                        {companyGroup.company}
                      </h3>
                      <div className="company-roles-count-mini">
                        {companyGroup.experiences.length}{" "}
                        {companyGroup.experiences.length === 1
                          ? "Role"
                          : "Roles"}
                      </div>
                    </div>
                  </div>

                  <div className="roles-list-mini">
                    {companyGroup.experiences.map((experience) => (
                      <div key={experience.id} className="role-item-mini">
                        <div className="role-header-mini">
                          <h4 className="role-title-mini">
                            {experience.title}
                          </h4>
                          <span className="role-duration-mini">
                            {experience.duration}
                          </span>
                        </div>
                        <p className="role-description-mini">
                          {experience.shortDescription}
                        </p>
                        <div className="role-skills-mini">
                          {experience.skills
                            .slice(0, 6)
                            .map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="role-skill-tag-mini"
                              >
                                {skill}
                              </span>
                            ))}
                          {experience.skills.length > 6 && (
                            <span className="role-skill-tag-mini">
                              +{experience.skills.length - 6}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="company-actions-mini">
                    <Link
                      href={`/experience?company=${encodeURIComponent(
                        companyGroup.company
                      )}`}
                      className="company-details-link-mini"
                    >
                      View Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/experience"
              className="project-link"
              style={{ marginTop: "2rem" }}
            >
              View All Experience <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h2 className="about-title">Featured Projects</h2>
            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <Link
              href="/projects"
              className="project-link"
              style={{ marginTop: "2rem" }}
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h2 className="about-title">Skills & Technologies</h2>
            <div className="skills-grid">
              {[
                "Programming Languages",
                "Libraries",
                "Cloud Platforms",
                "Technical Skills",
              ].map((category) => (
                <div key={category} className="skill-card">
                  <h3 className="category-title">{category}</h3>
                  <ul className="skill-list">
                    {category === "Programming Languages" ? (
                      <>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                      </>
                    ) : category === "Libraries" ? (
                      <>
                        <li>pandas</li>
                        <li>Scikit-Learn</li>
                        <li>NumPy</li>
                        <li>matplotlib</li>
                        <li>TensorFlow</li>
                        <li>Gradio</li>
                        <li>FastAPI</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                      </>
                    ) : category === "Cloud Platforms" ? (
                      <>
                        <li>Firebase</li>
                        <li>Hugging Face</li>
                        <li>Google Cloud Platform (GCP)</li>
                        <li>MongoDB</li>
                        <li>Vercel</li>
                      </>
                    ) : (
                      <>
                        <li>Data Science and Machine Learning</li>
                        <li>Git and GitHub</li>
                        <li>Data Structures and Algorithms</li>
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
            <a
              href="https://drive.google.com/drive/u/0/folders/1uMla6Ay3k3WorHjLqUQjOr9M_RYI8hpK"
              target="_blank"
              className="project-link"
              style={{ marginTop: "2rem" }}
            >
              View All Certifications <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="about-card">
            <h2 className="about-title">{`Let's Connect`}</h2>
            <p className="hero-description">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="social-links">
              {[
                { icon: Github, href: "https://github.com/harisj58" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/me-haris-javed/",
                },
                {
                  icon: Code,
                  href: "https://leetcode.com/u/harisj58/",
                },
                // TODO: add proxy email
                // { icon: Mail, href: "mailto:johndoe@gmail.com" },
              ].map(({ icon: Icon, href }, index) => (
                <a key={index} href={href} className="social-link">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="copyright-statement">
              {`© Haris Javed ${currentYear}. All rights reserved.`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
