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
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.repeat.set(2, 1);
      texture.offset.x = 0.5;
      texture.needsUpdate = true;
    });

    // Create normal map for better surface detail
    const normalMap = textureLoader.load('/lovable-uploads/33d60aea-ec22-40f9-bba3-519f2cbf9c56.png', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.repeat.set(2, 1);
      texture.offset.x = 0.5;
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
    globe.rotation.y = -Math.PI / 2;
    
    // Create car sprite with fixed orientation
    const carTextureLoader = new THREE.TextureLoader();
    carTextureLoader.load('/lovable-uploads/b6b05543-ff5b-4c47-b39d-3ca888ffc2ef.png', (texture) => {
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

    camera.position.z = 5;

    // Animation with fixed car orientation
    let orbitAngle = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.001;
        
        // Update car position in circular orbit
        if (carRef.current) {
          orbitAngle += 0.002; // Adjust speed as needed
          const radius = 2.1;
          carRef.current.position.x = Math.sin(orbitAngle) * radius;
          carRef.current.position.z = Math.cos(orbitAngle) * radius;
          // Keep car oriented upright
          if (carRef.current.material instanceof THREE.SpriteMaterial) {
            carRef.current.material.rotation = 0;
          }
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

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
