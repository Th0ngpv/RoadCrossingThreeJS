import * as THREE from 'three';
import { tilesPerRow, tileSize } from '../constants';

export function Grass(rowIndex) {
    // Create a group to hold the grass tiles
    const grass = new THREE.Group();
    grass.position.y = rowIndex * tileSize;

    // Create the grass tiles
    const foundation = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THREE.MeshLambertMaterial({ color: 0xbaf455})
    );

    // Set the position of the foundation
    foundation.position.z = 1.5;
    foundation.receiveShadow = true; // Enable shadow receiving for the grass

    // Add the foundation to the grass group
    grass.add(foundation);

    return grass;
}