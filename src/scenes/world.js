import * as THREE from 'three';

// src
import Experience from '../experience.js';

// scenes
import Environment from './environment.js';
import Factory from './factory.js';


export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on('ready', () => {
      this.environment = new Environment();
      this.factoryModel = new Factory();
    
    });
  }

  resize() {
    if (this.factoryModel) {
      this.factoryModel.resize();
    }
  
    if (this.environment) {
      this.environment.resize();
    }
  }

  update() {
    if (this.factoryModel) {
      this.factoryModel.update();
    }
   
    if (this.environment) {
      this.environment.update();
    }
  }
}
