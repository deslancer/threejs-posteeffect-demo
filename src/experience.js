import * as THREE from 'three';

// src
import Camera from './camera.js';
import Renderer from './renderer.js';
import PostEffectsComposer from './post-effects-composer.js'

// utils
import Sizes from './utils/sizes.js';
import Time from './utils/time.js';
import Resources from './utils/resources.js';
import Helpers from './utils/helpers.js';

// config
import assets from './config/assets.js';

// world
import World from './scenes/world.js';

import PostEffects from './posteffects.js';

export default class Experience {
  static instance;

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes();
    this.time = new Time();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.postEffectsComposer = new PostEffectsComposer();
    this.resources = new Resources(assets);
    this.helpers = new Helpers();
    this.postEffects = new PostEffects()
    this.world = new World();

    this.sizes.on('resize', () => {
      this.resize();
    });
    this.time.on('update', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
    this.world.resize();
    this.postEffectsComposer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
    this.world.update();
    this.postEffectsComposer.update()
  }
}
