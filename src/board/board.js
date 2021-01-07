import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../box/box';

import './board.css';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true,
        }
    }

    onBoxClick = index => {
        const boxes = this.state.boxes.slice();

        let history = this.state.history;

        if (findWinner(boxes) || boxes[index])
            return;

        if (areAllBoxesClicked(boxes) === true)
            return;

        boxes[index] = this.state.xIsNext ? 'x' : 'o';
        history.push(this.state.xIsNext ? 'x' : 'o');

        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }

    onRestart = _ => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true,
        })
    }

    render() {
        // Get winner (if there is any)
    const winner = findWinner(this.state.boxes)

        // Are all boxes checked?
    const isFilled = areAllBoxesClicked(this.state.boxes)

        // Status message
    let status

        if (winner) {
            // If winner exists, create status message
            status = `The winner is: ${winner}!`

        } else if(!winner && isFilled) {
            // If game is drawn, create status message
            status = 'Game drawn!'

        } else {
            // If there is no winner and game is not drawn, ask the next player to make a move
            status = `It is ${(this.state.xIsNext ? 'x' : 'o')}'s turn.`
        }

        return (
            <>
                {/* Link to scoreboard */}
                {/* <Link to="/" className="board-link">Go back to scoreboard</Link> */}

                {/* The game board */}
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="board-heading">{status}</h2>

                        <div className="board-row">
                            <Box value={this.state.boxes[0]} onClick={() => this.onBoxClick(0)} />

                            <Box value={this.state.boxes[1]} onClick={() => this.onBoxClick(1)} />

                            <Box value={this.state.boxes[2]} onClick={() => this.onBoxClick(2)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.boxes[3]} onClick={() => this.onBoxClick(3)} />

                            <Box value={this.state.boxes[4]} onClick={() => this.onBoxClick(4)} />

                            <Box value={this.state.boxes[5]} onClick={() => this.onBoxClick(5)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.boxes[6]} onClick={() => this.onBoxClick(6)} />

                            <Box value={this.state.boxes[7]} onClick={() => this.onBoxClick(7)} />

                            <Box value={this.state.boxes[8]} onClick={() => this.onBoxClick(8)} />
                        </div>
                    </div>

                    <div className="board-history-container">
                        <h2 className="board-heading">Moves history:</h2>

                        {/* List with history of moves */}
                        <ul className="board-history">
                            {this.state.history.length === 0 && <span>No moves to show.</span>}

                            {this.state.history.length !== 0 && this.state.history.map((move, index) => {
                                return <li key={index}>Move {index + 1}: <strong>{move}</strong></li>
                            })}
                        </ul>
                    </div>
                    
                    {/* Button to start new game */}
                    {winner && <div className="board-footer">
                        <button className="btn" onClick={this.onRestart}>Start new game</button>
                    </div>}
                </div>
            </>
        )
    }
}

function findWinner(boxes) {
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < rows.length; i++) {
        const [a, b, c] = rows[i];

        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a];
        }
    }

    return null;
}

function areAllBoxesClicked(boxes) {
    let count = 0;

    boxes.forEach(function(item) {
        if (item !== null) {
            count++;
        }
    })

    return count === 9;
}


export { Board }