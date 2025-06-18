import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { experiences } from '@/data/experiences';
import ExperienceCard from '@/components/ExperienceCard';
import FloatingElements from '@/components/FloatingElements';
import './page.css';
import Link from 'next/link';

const AllExperiences = () => {
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
                            My professional journey in software development and machine learning
                        </p>
                    </div>
                    <div className="experiences-grid">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllExperiences;