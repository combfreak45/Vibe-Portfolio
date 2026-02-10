import React from 'react';
import '../styles/components/ProjectCard.css';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech, image, githubUrl, liveUrl }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                    <div className="project-links">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Code">
                            <Github />
                        </a>
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live">
                            <ExternalLink />
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tech">
                    {tech.map((item, index) => (
                        <span key={index} className="tech-tag">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
