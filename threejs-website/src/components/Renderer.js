import * as THREE from 'three';

export function Renderer() {

    // get the canvas element from the DOM
    const canvas = document.querySelector("canvas.game");
    if (!canvas) {
        throw new Error("Canvas element not found");
    }

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas,
    });

    // Set the pixel ratio and size of the renderer
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    return renderer;
}