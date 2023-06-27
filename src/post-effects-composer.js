import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';


import Experience from './experience.js';

export default class PostEffectsComposer {

    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.camera = this.experience.camera;
        this.renderer = this.experience.renderer.webglRenderer;
        this.setComposer()
    }

    setComposer(){
    
        this.composer = new EffectComposer( this.renderer );
		this.composer.addPass( new RenderPass( this.scene, this.camera.perspectiveCamera ) );
    }

    resize(){
        this.composer.setSize(this.sizes.width, this.sizes.height);
    }

    update(){
        this.composer.render();
    }
}