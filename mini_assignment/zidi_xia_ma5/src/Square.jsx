import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    let color = 'white';
    if (symbol === '') {
        color = 'white';
    } else if (symbol === ' ') {
        color = 'black';
    }

    const dispatch = useDispatch();
    
    return (<div onClick = {() => dispatch(
        {
        type: 'boardClick',
        x: props.x,
        y: props.y,

        }
    )} id = "square" class={color}>
        {symbol}
    </div>);
}


