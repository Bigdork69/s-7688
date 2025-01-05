import * as THREE from 'three';

export const createRenderer = (container: HTMLDivElement) => {
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    logarithmicDepthBuffer: true 
  });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
};

export const createCamera = (container: HTMLDivElement) => {
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 6;
  return camera;
};

export const handleResize = (
  container: HTMLDivElement,
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
) => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};