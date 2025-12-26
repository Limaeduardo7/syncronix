'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = {
    className?: string;
    width?: number;
    height?: number;
    particleCount?: number;
    animationSpeed?: number;
    particleSize?: number;
    particleColor?: string;
};

export function DottedSurface({ 
    className,
    width,
    height,
    particleCount = 2000,
    animationSpeed = 0.1,
    particleSize = 6,
    particleColor = '#a900ff'
}: DottedSurfaceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        points: THREE.Points;
        animationId: number;
        count: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const containerWidth = width || container.clientWidth || window.innerWidth;
        const containerHeight = height || container.clientHeight || window.innerHeight;

        const SEPARATION = 120;
        const AMOUNTX = 30;
        const AMOUNTY = 20;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 1000, 4000);

        const camera = new THREE.PerspectiveCamera(
            75,
            containerWidth / containerHeight,
            1,
            4000,
        );
        // Posicionar câmera para focar na parte superior/meio da superfície
        camera.position.set(0, 200, 800);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(containerWidth, containerHeight);
        renderer.setClearColor(0x000000, 0);

        container.appendChild(renderer.domElement);

        // Create particles
        const positions: number[] = [];
        const colors: number[] = [];

        // Create geometry for all particles
        const geometry = new THREE.BufferGeometry();

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const y = 0; // Will be animated
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

                positions.push(x, y, z);
                
                // Parse hex color to RGB
                const hex = particleColor.replace('#', '');
                const r = parseInt(hex.substr(0, 2), 16) / 255;
                const g = parseInt(hex.substr(2, 2), 16) / 255;
                const b = parseInt(hex.substr(4, 2), 16) / 255;
                
                colors.push(r, g, b);
            }
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3),
        );
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Create material
        const material = new THREE.PointsMaterial({
            size: particleSize,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });

        // Create points object
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let count = 0;
        let animationId: number;

        // Animation function
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const positionAttribute = geometry.attributes.position;
            const positions = positionAttribute.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const index = i * 3;

                    // Animate Y position with sine waves - mais suave para hero
                    positions[index + 1] =
                        Math.sin((ix + count) * 0.3) * 40 +
                        Math.sin((iy + count) * 0.5) * 40;

                    i++;
                }
            }

            positionAttribute.needsUpdate = true;

            // Rotação suave da superfície
            points.rotation.x = Math.sin(count * 0.01) * 0.1;
            points.rotation.z = Math.cos(count * 0.01) * 0.1;

            renderer.render(scene, camera);
            count += animationSpeed;
        };

        // Handle window resize
        const handleResize = () => {
            const newWidth = width || container.clientWidth || window.innerWidth;
            const newHeight = height || container.clientHeight || window.innerHeight;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // Start animation
        animate();

        // Store references
        sceneRef.current = {
            scene,
            camera,
            renderer,
            points,
            animationId,
            count,
        };

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);

                // Clean up Three.js objects
                sceneRef.current.scene.traverse((object) => {
                    if (object instanceof THREE.Points) {
                        object.geometry.dispose();
                        if (Array.isArray(object.material)) {
                            object.material.forEach((material) => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });

                sceneRef.current.renderer.dispose();

                if (container && sceneRef.current.renderer.domElement) {
                    try {
                        container.removeChild(sceneRef.current.renderer.domElement);
                    } catch (e) {
                        // Element might already be removed
                    }
                }
            }
        };
    }, [width, height, particleCount, animationSpeed, particleSize, particleColor]);

    return (
        <div
            ref={containerRef}
            className={cn('absolute inset-0 pointer-events-none', className)}
            style={{ width: '100%', height: '100%' }}
        />
    );
}