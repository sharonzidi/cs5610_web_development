import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.game)
    const boardComponent = [];
    let count = 0;

    for(let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square symbol = {boardState[i][j]} x={i} y={j}/>)
            if(boardState[i][j] == ' ') {
                count++;
            }
        }
    }

    return (
      <div>
        <h1>Count: {count}</h1>
        <div id = "board" >
            {boardComponent}
        </div>
    </div>
    )
}

