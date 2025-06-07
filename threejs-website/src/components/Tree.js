import * as THREE from 'three';
import { tileSize } from '../constants';

export function Tree(tileIndex, height) {
    // Create a group to hold the tree components
    const tree = new THREE.Group();
    tree.position.x = tileIndex * tileSize;
    
    // Create the trunk
    const trunk = new THREE.Mesh(
        new THREE.BoxGeometry(15, 15, 20),
        new THREE.MeshStandardMaterial({ 
            color: 0x8B4513, // Brown color for the trunk
            flatShading: true,
        })
    );

    // Set the position of the trunk
    trunk.position.z = 10;
    tree.add(trunk);

    // Create the leaves
    const leaves = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, height),
        new THREE.MeshStandardMaterial({ 
            color: 0x228B22, // Green color for the leaves
            flatShading: true,
        })
    );

    // Position leaves above the trunk
    leaves.position.z = height / 2 + 20; 
    tree.add(leaves);
    leaves.castShadow = true; // Enable shadow casting for the leaves
    leaves.receiveShadow = true; // Enable shadow receiving for the leaves

    return tree;
}

    