import * as THREE from 'three';

export const createGlobeMesh = () => {
  const radius = 2;
  const segments = 64;
  const globeGeometry = new THREE.SphereGeometry(radius, segments, segments);
  
  const textureLoader = new THREE.TextureLoader();
  const globeTexture = textureLoader.load('/lovable-uploads/33d60aea-ec22-40f9-bba3-519f2cbf9c56.png', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
    texture.needsUpdate = true;
  });

  const normalMap = textureLoader.load('/lovable-uploads/33d60aea-ec22-40f9-bba3-519f2cbf9c56.png', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
    texture.needsUpdate = true;
  });
  
  const globeMaterial = new THREE.MeshPhongMaterial({
    map: globeTexture,
    normalMap: normalMap,
    normalScale: new THREE.Vector2(0.05, 0.05),
    shininess: 15,
    specular: new THREE.Color(0x333333),
    transparent: true,
    opacity: 0.95,
  });
  
  return new THREE.Mesh(globeGeometry, globeMaterial);
};