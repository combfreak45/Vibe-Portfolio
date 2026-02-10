import React from 'react';
import SectionHeader from '../components/SectionHeader';
import '../styles/sections/About.css';

const About = () => {
    const skills = [
        "JavaScript (ES6+)", "React.js", "Node.js", "Express",
        "MongoDB", "HTML5 & CSS3", "Git & GitHub", "RESTful APIs",
        "Agile/Scrum", "Tailwind CSS", "Docker", "AWS"
    ];

    return (
        <section id="about" className="section-padding">
            <SectionHeader
                title="About Me"
                subtitle="A little bit about who I am and what I do."
            />

            <div className="about-content">
                <div className="about-text">
                    <p>
                        I'm a passionate Full Stack Developer with experience in building web applications
                        from scratch. I enjoy solving complex problems and learning new technologies.
                    </p>
                    <p>
                        My journey in tech began 5 years ago, and I've been hooked ever since.
                        I specialize in the MERN stack but I'm always open to exploring new tools
                        that can help deliver better products.
                    </p>
                </div>

                <div className="skills-container">
                    <h3 className="subsection-title">My Toolbox</h3>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-tag">{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
