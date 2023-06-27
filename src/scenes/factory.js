// src
import Experience from '../experience.js';

// helpers
import BakedModel from '../helpers/bakeModel.js';

export default class Factory {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.resources = this.experience.resources;

    this.bakeFactory();
    this.setFactory();
  }

  bakeFactory() {
    this.model = new BakedModel(
      this.resources.items.factoryModel,
      1
    );
  }

  setFactory() {
    this.actualModel = this.model.getModel();
    this.actualModel.position.y = 0;
    this.actualModel.traverse((obj)=>{
      obj.castShadow = true;
      obj.receiveShadow = true;
    })
    this.scene.add(this.actualModel);
  }


  resize() {}

  update() {
   
  }
}
