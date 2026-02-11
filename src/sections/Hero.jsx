import React from 'react';
import Button from '../components/Button';
import Background3D from '../components/Background3D';
import { HeroShape } from '../components/Shapes'; // Ensure named export is used
import InteractionHint from '../components/InteractionHint';
import '../styles/sections/Hero.css';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section section-with-3d">
            <Background3D>
                <HeroShape />
            </Background3D>
            <InteractionHint />
            <div className="hero-content">
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Alex</span>.
                    <br />
                    Full Stack Developer.
                </h1>
                <p className="hero-subtitle">
                    I build accessible, pixel-perfect, and performant web experiences.
                </p>
                <div className="hero-actions">
                    <Button onClick={() => document.getElementById('projects').scrollIntoView()}>
                        View Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </Button>
                    <Button variant="secondary">
                        Resume <Download size={18} style={{ marginLeft: '8px' }} />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
