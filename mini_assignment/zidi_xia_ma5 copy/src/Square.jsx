import React from 'react';
import { useState } from 'react';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    // const [state, setState] = useState('');
    let borderColor = 'purpleBorder';
    if (symbol === '0') {
        borderColor = 'blueBorder';
    } else if (symbol === '') {
        borderColor = 'blackBorder';
    }

    return (<div onClick = {() => {
        // const boardState = props.boardState;
        // const onClick = props.onClick;
        // const x = props.x;
        // const y = props.y;

        const { boardState, onClick, x, y } = props;
        boardState[x][y] = 'X';
        onClick([...boardState])

    }} id = "square" class = {borderColor}>
        {symbol}
    </div>);
}

// if (state === 'X') {
//     setState('0');
// } else if (state === '0') {
//     setState('');
// } else {
//     setState('X')
// }

