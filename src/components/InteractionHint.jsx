import React, { useState, useEffect } from 'react';
import { Hand } from 'lucide-react';
import '../styles/components/InteractionHint.css';

const InteractionHint = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show after a short delay
        const timer = setTimeout(() => {
            setVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="interaction-hint">
            <Hand className="hint-icon" size={20} />
            <span>Drag to explore 3D</span>
        </div>
    );
};

export default InteractionHint;
