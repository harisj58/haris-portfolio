import React from "react";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import {
  getDurationFromString,
  formatDuration,
  getTotalCompanyDuration,
} from "../utils/dateUtils";
import "./CompanyExperienceCard.css";
import Link from "next/link";

const CompanyExperienceCard = ({ companyGroup }) => {
  const { company, companyLogo, companyUrl, experiences } = companyGroup;

  // Calculate total time at company
  const totalDuration = getTotalCompanyDuration(experiences);
  const totalDurationText = totalDuration ? formatDuration(totalDuration) : "";

  return (
    <div className="company-experience-card">
      <div className="company-header">
        <img
          src={companyLogo}
          alt={`${company} logo`}
          className="company-logo-main"
        />
        <div className="company-info">
          <h3 className="company-name">{company}</h3>
          <div className="company-roles-count">
            {experiences.length} {experiences.length === 1 ? "Role" : "Roles"}
            {totalDurationText && (
              <span className="company-total-duration">
                {" "}
                • {totalDurationText} total
              </span>
            )}
          </div>
          {companyUrl && (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="company-link-header"
            >
              <ExternalLink size={14} /> Visit Company
            </a>
          )}
        </div>
      </div>

      <div className="roles-timeline">
        <div className="timeline-line"></div>
        {experiences.map((experience, index) => {
          // Calculate individual role duration
          const roleDuration = getDurationFromString(experience.duration);
          const roleDurationText = roleDuration
            ? formatDuration(roleDuration)
            : "";

          return (
            <div key={experience.id} className="role-item">
              <div className="timeline-dot"></div>

              <div className="role-header">
                <h4 className="role-title">{experience.title}</h4>
                <div className="role-meta">
                  <div className="role-meta-item">
                    <Calendar size={12} />
                    {experience.duration}
                    {roleDurationText && (
                      <span className="role-duration-calculated">
                        {" "}
                        ({roleDurationText})
                      </span>
                    )}
                  </div>
                  <div className="role-meta-item">
                    <MapPin size={12} />
                    {experience.location}
                  </div>
                  <div className="role-meta-item">
                    <Briefcase size={12} />
                    {experience.employmentType}
                  </div>
                </div>
              </div>

              <p className="role-description">{experience.shortDescription}</p>

              <div className="role-skills">
                {experience.skills.slice(0, 8).map((skill, skillIndex) => (
                  <span key={skillIndex} className="role-skill-tag">
                    {skill}
                  </span>
                ))}
                {experience.skills.length > 8 && (
                  <span className="role-skill-tag">
                    +{experience.skills.length - 8}
                  </span>
                )}
              </div>

              <div className="role-actions">
                <Link
                  href={`/experience/${experience.id}`}
                  className="role-link"
                >
                  View Details <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyExperienceCard;
