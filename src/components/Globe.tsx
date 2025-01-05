import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    globe: THREE.Mesh;
    connections: THREE.Line[];
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(2, 32, 32);
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/lovable-uploads/236d6216-acd1-4137-9cc0-24f78adefe18.png'),
      transparent: true,
      opacity: 0.9,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x00ff88, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add point lights for glow effect
    const pointLight1 = new THREE.PointLight(0x00ff88, 2, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ff88, 2, 10);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    // Create connections between cities
    const connections: THREE.Line[] = [];
    const cities = [
      { lat: 40.7128, lng: -74.0060 }, // New York
      { lat: 51.5074, lng: -0.1278 },  // London
      { lat: 35.6762, lng: 139.6503 }, // Tokyo
      { lat: 22.3193, lng: 114.1694 }, // Hong Kong
      { lat: -33.8688, lng: 151.2093 }, // Sydney
      { lat: 48.8566, lng: 2.3522 },   // Paris
    ];

    const createConnection = (start: { lat: number; lng: number }, end: { lat: number; lng: number }) => {
      const points = [];
      const startPos = latLngToVector3(start.lat, start.lng);
      const endPos = latLngToVector3(end.lat, end.lng);
      
      for (let i = 0; i <= 20; i++) {
        const point = new THREE.Vector3().lerpVectors(startPos, endPos, i / 20);
        point.normalize();
        point.multiplyScalar(2 + Math.sin((i / 20) * Math.PI) * 0.2);
        points.push(point);
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 20, 0.02, 8, false);
      const material = new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.6,
        emissive: 0x00ff88,
        emissiveIntensity: 0.5,
      });

      return new THREE.Mesh(geometry, material);
    };

    const latLngToVector3 = (lat: number, lng: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(Math.sin(phi) * Math.cos(theta));
      const z = Math.sin(phi) * Math.sin(theta);
      const y = Math.cos(phi);
      return new THREE.Vector3(x, y, z).multiplyScalar(2);
    };

    // Create connections between cities
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        const connection = createConnection(cities[i], cities[j]);
        scene.add(connection);
        connections.push(connection as unknown as THREE.Line);
      }
    }

    scene.add(globe);
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      connections.forEach(connection => {
        connection.rotation.y += 0.002;
      });
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store references for cleanup
    globeRef.current = {
      scene,
      camera,
      renderer,
      globe,
      connections,
    };

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(globe);
      connections.forEach(connection => scene.remove(connection));
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
};

export default Globe;