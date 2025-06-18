"use client";

import React from "react";
import { ArrowLeft, MapPin, Calendar, Briefcase, ExternalLink } from "lucide-react";
import { experiences } from "../../../data/experiences";
import FloatingElements from "../../../components/FloatingElements";
import "./page.css";
import Link from "next/link";

const ExperienceDetail = ({ params }) => {
  const experience = experiences.find((exp) => exp.id === params.id);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="app-container sm:px-4 md:px-6 lg:px-8">
      <FloatingElements />
      <div className="experience-detail sm:px-2">
        <div className="about-card sm:p-4 md:p-6">
          <Link href="/experience" className="back-link sm:mb-3">
            <ArrowLeft size={16} /> Back to Experience
          </Link>

          <div className="experience-header">
            <div className="experience-hero sm:flex-col md:flex-row">
              <img
                src={experience.companyLogo}
                alt={`${experience.company} logo`}
                className="company-logo-large sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
              <div className="hero-info">
                <h1 className="hero-title sm:text-2xl md:text-3xl lg:text-4xl">
                  {experience.title}
                </h1>
                <div className="hero-company sm:text-lg md:text-xl lg:text-2xl">
                  {experience.company}
                </div>
                {experience.companyUrl && (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link sm:text-sm md:text-base"
                  >
                    <ExternalLink size={16} /> Visit Company
                  </a>
                )}
              </div>
            </div>

            <div className="experience-meta sm:flex-col md:flex-row">
              <div className="meta-section sm:w-full md:w-auto">
                <h3 className="meta-title">DURATION</h3>
                <div className="meta-content">
                  <Calendar size={16} />
                  <span>{experience.duration}</span>
                </div>
              </div>
              <div className="meta-section sm:w-full md:w-auto">
                <h3 className="meta-title">LOCATION</h3>
                <div className="meta-content">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
              <div className="meta-section sm:w-full md:w-auto">
                <h3 className="meta-title">TYPE</h3>
                <div className="meta-content">
                  <Briefcase size={16} />
                  <span>{experience.employmentType}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-section sm:mb-4 md:mb-6">
            <h2 className="section-title sm:text-xl md:text-2xl">Overview</h2>
            <p className="section-content sm:text-sm md:text-base">
              {experience.fullDescription}
            </p>
          </div>

          <div className="experience-section sm:mb-4 md:mb-6">
            <h2 className="section-title sm:text-xl md:text-2xl">
              Key Responsibilities
            </h2>
            <ul className="list-disc pl-5 sm:text-sm md:text-base">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="mb-2 section-content">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div className="experience-section sm:mb-4 md:mb-6">
            <h2 className="section-title sm:text-xl md:text-2xl">
              Key Achievements
            </h2>
            <ul className="list-disc pl-5 sm:text-sm md:text-base">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="mb-2 section-content">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="experience-section sm:mb-4 md:mb-6">
            <h2 className="section-title sm:text-xl md:text-2xl">
              Skills & Technologies
            </h2>
            <div className="skills-grid sm:gap-1 md:gap-2">
              {experience.skills.map((skill, index) => (
                <div key={index} className="skill-item sm:text-xs md:text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;