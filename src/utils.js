export const getKnightPosition = (position) => {
    console.log("🚀 ~ file: utils.js:2 ~ getKnightPosition ~ position:", position)
    // Convert position to x,y coordinates
    const [x, y] = position;

    // Possible moves for a knight
    const moves = [
        [1, 2],
        [2, 1],
        [-1, 2],
        [-2, 1],
        [-1, -2],
        [-2, -1],
        [1, -2],
        [2, -1],
    ];

    // Initialize possible positions to an empty array
    const possiblePositions = [];

    // Check each possible move
    for (const [dx, dy] of moves) {
        // Calculate new position
        const newX = x + dx;
        const newY = y + dy;

        // Check if new position is within the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            // Add new position to possible positions
            possiblePositions.push([newX, newY]);
        }
    }

    console.log("🚀 ~ file: utils.js:40 ~ getKnightPosition ~ possiblePositions:", possiblePositions)
    // Return array of possible positions
    return possiblePositions;

    // Example usage:
    //   console.log(knightMoves([0, 0])); // [[1, 2], [2, 1]]
    //   console.log(knightMoves([3, 3])); // [[1, 2], [2, 1], [4, 1], [5, 2], [5, 4], [4, 5], [2, 5], [1, 4]]
}
