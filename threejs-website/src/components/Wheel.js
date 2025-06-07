import * as THREE from 'three';

export function Wheel(x) {
    const wheel = new THREE.Mesh(
        new THREE.BoxGeometry(12, 33, 12),
        new THREE.MeshLambertMaterial({ 
            color: 0x333333, // Black color for the wheel
            flatShading: true,
        })
    );
    
    // Set the position of the wheel
    wheel.position.x = x;
    wheel.position.z = 6; // Position the wheel above the ground

    return wheel;
}