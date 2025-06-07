import * as THREE from 'three';
import { tilesPerRow, tileSize } from '../constants';

export function Road(rowIndex) {
    // Create a group to hold the road tiles
    const road = new THREE.Group();
    road.position.y = rowIndex * tileSize;

    // Create the road tiles
    const foundation = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize),
        new THREE.MeshLambertMaterial({ color: 0x808080 }) // Gray color for the road
    );

    // add the foundation to the road group
    road.add(foundation);

    return road;
}