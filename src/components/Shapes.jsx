import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, TorusKnot, Sphere } from '@react-three/drei';
import { useTheme } from '../hooks/useTheme';

export const HeroShape = () => {
    const meshRef = useRef();
    const { theme } = useTheme();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    // Keeping the "faded blue" preference for light mode
    const color = theme === 'light' ? '#e0f2fe' : '#646cff';

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[2, 0, -2]}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

export const AboutShape = () => {
    const meshRef = useRef();
    const { theme } = useTheme();

    useFrame((state) => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    const color = theme === 'light' ? '#8b5cf6' : '#a855f7'; // Violet/Purple

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
            <TorusKnot ref={meshRef} args={[0.8, 0.3, 100, 16]} position={[-2, 0, -2]}>
                <meshStandardMaterial
                    color={color}
                    roughness={0.3}
                    metalness={0.6}
                    wireframe={true}
                />
            </TorusKnot>
        </Float>
    );
};
