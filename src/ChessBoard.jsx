import React, { useState } from 'react';
import { getKnightPosition } from './utils';

function ChessBoard() {
    const boardSize = 8;
    const squares = [];
    const [squareClicked, setSquareClicked] = useState('');
    const [possibleMoves, setPossibleMoves] = useState([]);

    const onSquareClick = (row, col) => {
        setSquareClicked(`${row + 1},${col + 1}`);
        const moves = getKnightPosition([row + 1, col + 1])
        setPossibleMoves(moves);
    }

    // loop through the rows and columns of the board
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            // calculate whether the square should be black or white
            const isBlack = (row + col) % 2 === 1;

            // create the square element and push it to the squares array
            squares.push(
                <div onClick={() => onSquareClick(row, col)}
                    key={`${row},${col}`}
                    style={{
                        backgroundColor: isBlack ? 'black' : 'white',
                        width: '50px',
                        height: '50px',
                    }}
                />
            );
        }
    }

    return (
        <div style={{
            display: 'flex',
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
  <h1>Knight Moves</h1>
            <div
                style={{
                    border: "1px solid black",
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: `${boardSize * 50}px`,
                    height: `${boardSize * 50}px`,
                }}
            >
                {squares}
            </div>
            <div>{
                squareClicked === '' ?
                    <p>
                        Click on board for initial point of Knight
                    </p>
                    :
                    <>
                        <p>Your Knight is on {squareClicked}</p>
                        <p>Knight can move on below possible ways:</p>
                        <ul>
                            {possibleMoves.map(([x, y], index) => (
                                <li key={index}>
                                    [{x}, {y}]
                                </li>
                            ))}
                        </ul>
                    </>
            }</div>
        </div>
    );
}

export default ChessBoard;
