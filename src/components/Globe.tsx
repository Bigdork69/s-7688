import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  const connectionsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Globe creation
    const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/lovable-uploads/dd06865b-f21a-46c2-baa9-f067adac35ee.png'),
      transparent: true,
      opacity: 0.9,
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeRef.current = new THREE.Group();
    globeRef.current.add(globe);
    scene.add(globeRef.current);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // City coordinates (longitude, latitude)
    const cities = [
      { name: "New York", coords: [-74, 40.7] },
      { name: "London", coords: [-0.1, 51.5] },
      { name: "Tokyo", coords: [139.7, 35.7] },
      { name: "Sydney", coords: [151.2, -33.9] },
      { name: "Dubai", coords: [55.3, 25.2] },
      { name: "Singapore", coords: [103.8, 1.4] },
      { name: "Hong Kong", coords: [114.2, 22.3] },
      { name: "Paris", coords: [2.3, 48.9] },
      { name: "Mumbai", coords: [72.9, 19.1] },
      { name: "São Paulo", coords: [-46.6, -23.5] }
    ];

    // Convert lat/long to 3D coordinates
    const latLongToVector3 = (lat: number, long: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (long + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // Create glowing connections
    const createConnection = (startCity: typeof cities[0], endCity: typeof cities[0]) => {
      const start = latLongToVector3(startCity.coords[1], startCity.coords[0], 2);
      const end = latLongToVector3(endCity.coords[1], endCity.coords[0], 2);
      
      const points = [];
      const segments = 50;
      for (let i = 0; i <= segments; i++) {
        const alpha = i / segments;
        const middle = new THREE.Vector3().lerpVectors(start, end, alpha);
        // Add curve to the line
        middle.normalize().multiplyScalar(2 + Math.sin(alpha * Math.PI) * 0.5);
        points.push(middle);
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 20, 0.02, 8, false);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.6,
      });
      
      const connection = new THREE.Mesh(geometry, material);
      scene.add(connection);
      connectionsRef.current.push(connection);
    };

    // Create random connections every few seconds
    const createRandomConnection = () => {
      const startCity = cities[Math.floor(Math.random() * cities.length)];
      let endCity = cities[Math.floor(Math.random() * cities.length)];
      while (endCity === startCity) {
        endCity = cities[Math.floor(Math.random() * cities.length)];
      }
      createConnection(startCity, endCity);

      // Remove old connections
      if (connectionsRef.current.length > 10) {
        const oldConnection = connectionsRef.current.shift();
        if (oldConnection) {
          scene.remove(oldConnection);
          oldConnection.geometry.dispose();
          (oldConnection.material as THREE.Material).dispose();
        }
      }
    };

    // Initial connections
    for (let i = 0; i < 5; i++) {
      createRandomConnection();
    }

    // Add new connections periodically
    const connectionInterval = setInterval(createRandomConnection, 2000);

    // Camera position
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.002;
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
      clearInterval(connectionInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[600px]" />;
};

export default Globe;