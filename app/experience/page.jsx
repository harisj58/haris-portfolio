import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { experiencesByCompany } from '@/data/experience';
import CompanyExperienceCard from '@/components/CompanyExperienceCard';
import FloatingElements from '@/components/FloatingElements';
import './page.css';
import Link from 'next/link';

const AllExperiences = () => {
    const companyGroups = Object.values(experiencesByCompany);

    return (
        <div className="app-container">
            <FloatingElements />
            <div className="all-experiences">
                <div className="about-card">
                    <Link href="/" className="back-link">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <div className="experiences-header">
                        <h1 className="experiences-title">Work Experience</h1>
                        <p className="experiences-subtitle">
                            My professional journey organized by company, showcasing career progression and diverse experiences
                        </p>
                    </div>
                    
                    <div className="experiences-by-company">
                        {companyGroups.map((companyGroup, index) => (
                            <CompanyExperienceCard
                                key={companyGroup.company}
                                companyGroup={companyGroup}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllExperiences;