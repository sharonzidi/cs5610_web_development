import React, { useReducer, useState } from 'react';
import './QuizComponents.css';

// My Name: Zidi

// Question 1 - Who Pays The Bill
export function LoserApp() {

  const [friendsState, setFriendsState] = useState([]);
  const [friendInputState, setFriendInputState] = useState("");

  return (<>
    <ul>
      {friendsState.map((friendName) => <li class="FriendName">{friendName}</li>)}
    </ul>

    <input type="text" value={friendInputState}

      onChange={(inputEvent) => { setFriendInputState(inputEvent.target.value) }}></input>
    <button onClick={() => { setFriendsState([...friendsState, friendInputState])}}>Add Friend</button>
    <button onClick={() => { }}>Select Loser!</button>
    <SelectedLoser />
  </>
  );
}

export function SelectedLoser(props) {

  const { selectedFriend, removeFunction } = props;

  return (
    <div id="SelectedLoserForm">
      <div id="SelectedFriend">
        {selectedFriend || '?'}
      </div>
      <button onClick={() => removeFunction()}>Remove from friend list </button>
    </div>
  );
}


// Finish - Tic Tac Toe
function ticTacToeReducer(state, action) {
  if (action.type === "tileClick") {
    const { x, y } = action;

    const currentValue = state.board[x][y];
    if (currentValue === "X") {
      state.board[x][y] = "O";
    } else {
      state.board[x][y] = "X";
    }
    state.board = [...state.board];
    return { ...state }
  }
  return state;
}

const ticTacToeInitialBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const ticTacToeInitialState = {
  board: ticTacToeInitialBoard,
}

export function TicTacToe() {
  const [ticTacToeBoardState, ticTacToeBoardDispatch] = useReducer(
    ticTacToeReducer,
    ticTacToeInitialState,
  )

  const boardComponent = []
  ticTacToeBoardState.board.forEach((row, x) => {
    row.forEach((tile, y) =>

      boardComponent.push(<div class="TicTacToeTile"
        onClick={() => ticTacToeBoardDispatch({
          type: "tileClick",
          x,
          y,
        })} >{tile}</div>)
    )
  });


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          line: lines[i],
          isDraw: false,
        };
      }
    }
  
    let isDraw = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        isDraw = false;
        break;
      }
    }
    return {
      winner: null,
      line: null,
      isDraw: isDraw,
    };
  }

  return (
    <div id="TicTacToe">
      {
        <div id="TicTacToeWinner">{"X wins!"}</div>
      }
      <div id="TicTacToeBoard">
        {boardComponent}
      </div>
    </div>
  );
}