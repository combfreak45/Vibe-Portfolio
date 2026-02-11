import React from 'react';
import SectionHeader from '../components/SectionHeader';
import '../styles/sections/Experience.css';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            period: "2023 - Present",
            description: "Leading the frontend team in building scalable web applications using React, Next.js, and TypeScript. Improved site performance by 40%."
        },
        {
            id: 2,
            role: "Software Engineer",
            company: "Creative Solutions Ltd.",
            period: "2021 - 2023",
            description: "Developed and maintained client-facing websites. Collaborated with designers to implement pixel-perfect user interfaces."
        },
        {
            id: 3,
            role: "Junior Web Developer",
            company: "StartUp Hub",
            period: "2020 - 2021",
            description: "Assisted in the development of the main product dashboard. Gained expertise in JavaScript and modern CSS frameworks."
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <SectionHeader
                title="Experience"
                subtitle="My professional journey."
            />
            <div className="experience-container">
                {experiences.map((exp) => (
                    <div key={exp.id} className="experience-card">
                        <div className="experience-header">
                            <div className="experience-role-company">
                                <h3>{exp.role}</h3>
                                <div className="company-name">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                </div>
                            </div>
                            <div className="experience-period">
                                <Calendar size={16} />
                                <span>{exp.period}</span>
                            </div>
                        </div>
                        <p className="experience-description">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
