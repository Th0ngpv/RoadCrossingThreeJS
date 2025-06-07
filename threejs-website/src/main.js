import * as THREE from 'three';
import { Renderer } from './components/Renderer';
import { Camera } from './components/Camera';
import { player } from './components/Player';
import "./style.css";

// Initialize the scene
const scene = new THREE.Scene();
scene.add(player);


// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); 
// Set the position of the light
directionalLight.position.set(-100,-100,200).normalize(); 
scene.add(directionalLight);


// Initialize the camera
const camera = new Camera();
scene.add(camera);

// Initialize the renderer
const renderer = Renderer();
renderer.render(scene, camera);