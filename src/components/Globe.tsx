import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createRenderer, createCamera, handleResize } from './globe/threeUtils';
import { createGlobeMesh } from './globe/GlobeMesh';
import { createCarSprite, updateCarPosition } from './globe/CarSprite';
import { setupLighting } from './globe/SceneLighting';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  const carRef = useRef<THREE.Sprite | null>(null);
  const orbitRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const renderer = createRenderer(mountRef.current);
    const camera = createCamera(mountRef.current);
    
    mountRef.current.appendChild(renderer.domElement);

    // Create globe
    const globe = createGlobeMesh();
    globeRef.current = new THREE.Group();
    globeRef.current.add(globe);
    scene.add(globeRef.current);

    // Create car sprite
    createCarSprite(scene, (sprite) => {
      carRef.current = sprite;
    });

    // Setup lighting
    setupLighting(scene);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (carRef.current) {
        orbitRef.current += 0.0065; // 30% faster speed
        updateCarPosition(carRef.current, orbitRef.current);
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const resizeHandler = () => {
      if (!mountRef.current) return;
      handleResize(mountRef.current, renderer, camera);
    };
    window.addEventListener('resize', resizeHandler);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[600px]" />;
};

export default Globe;