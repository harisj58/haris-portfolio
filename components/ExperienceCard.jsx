import React from "react";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import "./ExperienceCard.css";
import Link from "next/link";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <img
          src={experience.companyLogo}
          alt={`${experience.company} logo`}
          className="company-logo"
        />
        <div className="experience-info">
          <h3 className="experience-title">{experience.title}</h3>
          <div className="company-name">{experience.company}</div>
          <div className="experience-meta">
            <div className="meta-item">
              <Calendar size={14} />
              {experience.duration}
            </div>
            <div className="meta-item">
              <MapPin size={14} />
              {experience.location}
            </div>
            <div className="meta-item">
              <Briefcase size={14} />
              {experience.employmentType}
            </div>
          </div>
        </div>
      </div>

      <p className="experience-description">{experience.shortDescription}</p>

      <div className="skills-preview">
        {experience.skills.slice(0, 6).map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
        {experience.skills.length > 6 && (
          <span className="skill-tag">
            +{experience.skills.length - 6} more
          </span>
        )}
      </div>

      <div className="experience-actions">
        <Link href={`/experience/${experience.id}`} className="experience-link">
          View Details <ArrowRight size={16} />
        </Link>
        {experience.companyUrl && (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-link"
          >
            <ExternalLink size={16} /> Company
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
