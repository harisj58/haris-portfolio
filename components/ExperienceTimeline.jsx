import React from "react";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import "./ExperienceTimeline.css";
import Link from "next/link";

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="experience-timeline">
      <div className="timeline-line-main"></div>
      {experiences.map((experience, index) => (
        <div key={experience.id} className="timeline-item">
          <div className="timeline-dot-main"></div>

          <div className="timeline-content">
            <div className="experience-header">
              {experience.companyLogo && (
                <img
                  src={experience.companyLogo}
                  alt={`${experience.company} logo`}
                  className="company-logo-timeline"
                />
              )}
              <div className="experience-info">
                <h3 className="experience-title">{experience.title}</h3>
                <h4 className="experience-company">{experience.company}</h4>
                <div className="experience-meta">
                  <div className="experience-meta-item">
                    <Calendar size={12} />
                    {experience.duration}
                  </div>
                  <div className="experience-meta-item">
                    <MapPin size={12} />
                    {experience.location}
                  </div>
                  <div className="experience-meta-item">
                    <Briefcase size={12} />
                    {experience.employmentType}
                  </div>
                </div>
              </div>
            </div>

            <p className="experience-description">
              {experience.shortDescription}
            </p>

            <div className="experience-skills">
              {experience.skills.slice(0, 6).map((skill, skillIndex) => (
                <span key={skillIndex} className="experience-skill-tag">
                  {skill}
                </span>
              ))}
              {experience.skills.length > 6 && (
                <span className="experience-skill-tag">
                  +{experience.skills.length - 6}
                </span>
              )}
            </div>

            <div className="experience-actions">
              <Link
                href={`/experience/${experience.id}`}
                className="experience-link"
              >
                View Details <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
