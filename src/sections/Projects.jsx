import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import '../styles/sections/Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-secondary">
            <SectionHeader
                title="Featured Projects"
                subtitle="Here are some of the things I've built."
            />

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
