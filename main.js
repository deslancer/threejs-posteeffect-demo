// styling
import './style.css';

// src
import Experience from './src/experience.js';

const experience = new Experience(
  document.querySelector('canvas.experience-canvas')
);

const enableEffect1Btn = document.getElementById('enable_effect1');
const disableEffect1EffectsBtn = document.getElementById('disable_effect1');

enableEffect1Btn.addEventListener('click', ()=>{
  experience.postEffects.setEffect1()
})

disableEffect1EffectsBtn.addEventListener('click', ()=>{
  experience.postEffects.removeEffect1()
})