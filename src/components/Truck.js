import * as THREE from 'three';
import { tileSize } from '../constants';
import { Wheel } from './Wheel';

export function Truck(tileIndex, direction, color) {
    const truck = new THREE.Group();
    truck.position.x = tileIndex * tileSize;
    
    // Rotate the truck based on the direction
    if (!direction) {
        truck.rotation.z = Math.PI;
    }

    const cargo = new THREE.Mesh(
        new THREE.BoxGeometry(70, 35, 35),
        new THREE.MeshLambertMaterial({ 
            color: "white",
            flatShading: true,
        })
    );

    // Set the position of the cargo
    cargo.position.z = 25;
    cargo.position.x = -15;
    cargo.castShadow = true; // Enable shadow casting for the cargo
    cargo.receiveShadow = true; // Enable shadow receiving for the cargo
    truck.add(cargo);

    // Create the cabin of the truck
    const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, 30),
        new THREE.MeshLambertMaterial({ 
            color: color || 0xFF0000, // Default to red if no color is provided
            flatShading: true,
        })
    );

    // Position the cabin above the cargo
    cabin.position.z = 20;
    cabin.position.x = 35;
    cabin.castShadow = true; // Enable shadow casting for the cabin
    cabin.receiveShadow = true; // Enable shadow receiving for the cabin
    truck.add(cabin);

    // Create the wheels
    const frontWheel = Wheel(37);
    truck.add(frontWheel);

    const middleWheel = Wheel(5);
    truck.add(middleWheel);

    const backWheel = Wheel(-35);
    truck.add(backWheel);

    return truck;
}