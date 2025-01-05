import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  const carRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Globe creation with enhanced visibility
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Load texture and ensure it wraps correctly around the sphere
    const textureLoader = new THREE.TextureLoader();
    const globeTexture = textureLoader.load('/lovable-uploads/dd06865b-f21a-46c2-baa9-f067adac35ee.png', (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      texture.offset.x = 0.25; // Adjust offset to align the texture properly
      texture.needsUpdate = true;
    });
    
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: globeTexture,
      transparent: true,
      opacity: 0.95,
      shininess: 50,
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.rotation.y = Math.PI; // Initial rotation to show the correct side
    
    // Create car sprite
    const carTextureLoader = new THREE.TextureLoader();
    carTextureLoader.load('/lovable-uploads/a842b061-ded7-467a-96a9-3364f26347c4.png', (texture) => {
      const carMaterial = new THREE.SpriteMaterial({ map: texture });
      const car = new THREE.Sprite(carMaterial);
      
      // Scale and position the car
      car.scale.set(1, 0.5, 1);
      car.position.set(0, 2.5, 0); // Position slightly above the globe's surface
      
      carRef.current = car;
      scene.add(car);
    });
    
    globeRef.current = new THREE.Group();
    globeRef.current.add(globe);
    scene.add(globeRef.current);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(hemisphereLight);

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
          carRef.current.position.x = Math.sin(angle) * 2.5;
          carRef.current.position.z = Math.cos(angle) * 2.5;
          // Make car always face the camera
          carRef.current.material.rotation = -angle;
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