import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  const carRef = useRef<THREE.Sprite | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with improved background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      logarithmicDepthBuffer: true 
    });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced globe creation with better geometry resolution
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Load Earth texture with improved mapping
    const textureLoader = new THREE.TextureLoader();
    const globeTexture = textureLoader.load('/lovable-uploads/33d60aea-ec22-40f9-bba3-519f2cbf9c56.png', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 1); // Repeat texture horizontally twice
      texture.offset.x = 0; // Reset offset
      texture.needsUpdate = true;
    });

    // Create normal map for better surface detail
    const normalMap = textureLoader.load('/lovable-uploads/33d60aea-ec22-40f9-bba3-519f2cbf9c56.png', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 1); // Match the color texture repeat
      texture.offset.x = 0;
      texture.needsUpdate = true;
    });
    
    // Enhanced material with better shading
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: globeTexture,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(0.05, 0.05),
      shininess: 15,
      specular: new THREE.Color(0x333333),
      transparent: true,
      opacity: 0.95,
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.rotation.y = Math.PI;
    
    // Create car sprite with new image
    const carTextureLoader = new THREE.TextureLoader();
    carTextureLoader.load('/lovable-uploads/e7755a0f-26cb-4148-abb0-4744153a1db6.png', (texture) => {
      const carMaterial = new THREE.SpriteMaterial({ map: texture });
      const car = new THREE.Sprite(carMaterial);
      car.scale.set(0.8, 0.8, 1);
      car.position.set(0, 0, 2.1);
      carRef.current = car;
      scene.add(car);
    });
    
    globeRef.current = new THREE.Group();
    globeRef.current.add(globe);
    scene.add(globeRef.current);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 2.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    scene.add(hemisphereLight);

    // Add subtle glow effect
    const glowGeometry = new THREE.SphereGeometry(2.05, 32, 32);
    const glowMaterial = new THREE.MeshPhongMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    globeRef.current.add(glowMesh);

    // Camera position
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.001;
        
        // Update car position to follow globe rotation
        if (carRef.current) {
          const angle = globeRef.current.rotation.y;
          carRef.current.position.x = Math.sin(angle) * 2.1;
          carRef.current.position.z = Math.cos(angle) * 2.1;
          // Make car always face the camera
          if (carRef.current.material instanceof THREE.SpriteMaterial) {
            carRef.current.material.rotation = -angle;
          }
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[600px]" />;
};

export default Globe;