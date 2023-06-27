import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// src
import Experience from '../experience.js';

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.parameters = {
      sunlight: {
        color: '#ffffff',
        intensity: 5,
        position: {
          x: 1,
          y: 50,
          z: 0,
        },
      },
      ambientlight: {
        color: '#ffffff',
        intensity: 5,
      },
      fog: {
        color: '#000000',
        intensity: 0.01,
      },
    };

    this.setSunlight();
    this.setAmbientLight();
    this.setFog();
    this.setHDRMap()
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight(
      this.parameters.sunlight.color,
      this.parameters.sunlight.intensity
    );
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;

    this.sunLight.position.set(
      this.parameters.sunlight.position.x,
      this.parameters.sunlight.position.y,
      this.parameters.sunlight.position.z
    );
  
  }

  setAmbientLight() {
    this.ambientLight = new THREE.AmbientLight(
      this.parameters.ambientlight.color,
      this.parameters.ambientlight.intensity
    );
    this.scene.add(this.ambientLight);
    
  }

  setFog() {
    this.fog = new THREE.FogExp2(
      this.parameters.fog.color,
      this.parameters.fog.intensity
    );
    this.scene.fog = this.fog;
  }
  setHDRMap(){
    const scene = this.scene;
    new RGBELoader()
					.setPath( 'textures/' )
					.load( 'quarry_01_1k.hdr', function ( texture ) {

						texture.mapping = THREE.EquirectangularReflectionMapping;

						scene.background = texture;
						scene.environment = texture;

					} );
  }
  resize() {}

  update() {}
}
