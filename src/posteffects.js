import * as THREE from 'three';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { BleachBypassShader } from 'three/addons/shaders/BleachBypassShader.js';
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js';
import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';
import { ColorifyShader } from 'three/addons/shaders/ColorifyShader.js';
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js';
import { VignetteShader } from 'three/addons/shaders/VignetteShader.js';

import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';



import Experience from './experience.js';

export default class PostEffects {
    constructor() {
        this.experience = new Experience();
        this.composer = this.experience.postEffectsComposer.composer;
        this.effectColorify1 = new ShaderPass( ColorifyShader );
		this.effectColorify2 = new ShaderPass( ColorifyShader );
        this.gammaCorrection = new ShaderPass( GammaCorrectionShader )
        this.effectFilmBW = new FilmPass( 0.1, 0.3, 2048, true );
        this.effectVignette = new ShaderPass( VignetteShader );
        this.bleachEffect = new ShaderPass( BleachBypassShader )
    }
    setEffect1(){
        
		this.effectColorify1.uniforms[ 'color' ] = new THREE.Uniform( new THREE.Color( 1.0, 1.0, 1.0 ) );
		this.effectColorify2.uniforms[ 'color' ] = new THREE.Uniform( new THREE.Color( 0.5, 0.555, 0.515 ) );

        this.effectVignette.uniforms[ 'offset' ].value = 0.97;
		this.effectVignette.uniforms[ 'darkness' ].value = 1.2;

        this.gammaCorrection.uniforms[ 'tDiffuse' ].value = 1.1

        this.bleachEffect.uniforms[ 'opacity' ].value = 1.0;

        this.composer.addPass(this.gammaCorrection)
        this.composer.addPass(this.effectFilmBW)
        this.composer.addPass(this.effectColorify1)
        this.composer.addPass(this.effectColorify2)
        this.composer.addPass(this.effectVignette)
        
        this.composer.addPass(this.bleachEffect)

       
    }

    removeEffect1(){
        this.composer.removePass(this.effectColorify1)
        this.composer.removePass(this.effectColorify2)
        this.composer.removePass(this.effectVignette)
        this.composer.removePass(this.effectFilmBW)
        this.composer.removePass(this.bleachEffect)
        this.composer.removePass(this.gammaCorrection)
    }
}