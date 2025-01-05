import * as THREE from 'three';

export const setupLighting = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0x404040, 2.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 2.5);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
  scene.add(hemisphereLight);
};