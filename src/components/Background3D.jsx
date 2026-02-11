import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import '../styles/components/Background3D.css';

const Background3D = ({ children }) => {
    return (
        <div className="background-3d">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
            </Canvas>
        </div>
    );
};

export default Background3D;
