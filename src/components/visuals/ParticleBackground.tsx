'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
    const count = 10000;
    const mesh = useRef<THREE.Points>(null!);

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const color1 = new THREE.Color('#3870eb');
        const color2 = new THREE.Color('#ec4899');

        for (let i = 0; i < count; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 3 + Math.random() * 2;

            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);

            const mixed = Math.random() > 0.5 ? color1 : color2;
            col[i * 3] = mixed.r;
            col[i * 3 + 1] = mixed.g;
            col[i * 3 + 2] = mixed.b;
        }
        return [pos, col];
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = time * 0.05;
            mesh.current.rotation.x = time * 0.02;

            // Gentle pulsing
            const s = 1 + Math.sin(time * 0.3) * 0.1;
            mesh.current.scale.set(s, s, s);
        }
    });

    return (
        <Points ref={mesh} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                vertexColors
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.6}
            />
        </Points>
    );
}

const ParticleBackground = () => {
    return (
        <div
            id="global-bg-animation"
            className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#2E2B37]"
        >
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <React.Suspense fallback={null}>
                    <Particles />
                    <ambientLight intensity={0.5} />
                </React.Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,112,235,0.05)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2E2B37]" />
        </div>
    );
};

export default ParticleBackground;
