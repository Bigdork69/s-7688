import * as THREE from 'three';

export const createCarSprite = (scene: THREE.Scene, onLoad: (sprite: THREE.Sprite) => void) => {
  const carTextureLoader = new THREE.TextureLoader();
  carTextureLoader.load('/lovable-uploads/b6b05543-ff5b-4c47-b39d-3ca888ffc2ef.png', (texture) => {
    const carMaterial = new THREE.SpriteMaterial({ map: texture });
    const car = new THREE.Sprite(carMaterial);
    car.scale.set(0.8, 0.8, 1);
    scene.add(car);
    onLoad(car);
  });
};

export const updateCarPosition = (
  car: THREE.Sprite,
  orbitValue: number,
  radius: number = 2.5
) => {
  const height = Math.sin(orbitValue * 0.5) * 0.2;
  car.position.x = Math.sin(orbitValue) * radius;
  car.position.y = height;
  car.position.z = Math.cos(orbitValue) * radius;
  
  if (car.material instanceof THREE.SpriteMaterial) {
    car.material.rotation = 0;
  }
};