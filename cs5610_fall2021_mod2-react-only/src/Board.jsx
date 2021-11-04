import React, { useState } from 'react';
import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const [boardState, setBoard] = useState([
        ['','',''],
        ['','',''],
        ['','',''],
    ])

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
    }

    return (
        <div>
            <div id="board">
                {boardComponent}
            </div>
        </div>
    )
}