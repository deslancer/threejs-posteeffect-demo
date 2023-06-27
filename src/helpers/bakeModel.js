import * as THREE from 'three';

export default class BakedModel {
  constructor(model, scale) {
    this.model = model;
   
    this.model.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (scale) child.scale.set(scale, scale, scale);
      }
    });

    return this;
  }

  getModel() {
    return this.model.scene;
  }
}
