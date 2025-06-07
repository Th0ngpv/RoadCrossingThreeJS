export function calculateFinalPosition(currentPosition, moves) {
    return moves.reduce((position, direction) => {
        if (direction === 'forward') {
            return {
                rowIndex: position.rowIndex + 1, // Move forward in the row
                tileIndex: position.tileIndex, // Stay in the same tile index
            };
        }
        if (direction === 'backward') {
            return {
                rowIndex: position.rowIndex - 1, // Move backward in the row
                tileIndex: position.tileIndex, // Stay in the same tile index
            };
        }
        if (direction === 'left') {
            return {
                rowIndex: position.rowIndex, // Stay in the same row
                tileIndex: position.tileIndex - 1, // Move left in the tile index
            };
        }
        if (direction === 'right') {
            return {
                rowIndex: position.rowIndex, // Stay in the same row
                tileIndex: position.tileIndex + 1, // Move right in the tile index
            };
        }
        return position; // Return the current position if no valid direction is found
    }, currentPosition);
}