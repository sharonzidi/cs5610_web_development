// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    
    // const [state, setState] = useState(props.symbol);
    let borderColor = 'purpleBorder';
    if (symbol === '0') {
        borderColor = 'blueBorder';
    } else if (symbol === '') {
        borderColor = 'blackBorder';
    }


    return (<div onClick={() => {
        const x = props.x;
        const y = props.y;
        const boardState = props.boardState;
        if (symbol === 'X') {
            boardState[x][y] = '0';
        } else {
            boardState[x][y] = 'X'
        }
        props.onClick([...boardState]);

        }
    } id="square" class={borderColor}>
        {symbol}
    </div>);
}



