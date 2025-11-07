import React, { useEffect, useState } from 'react'
import './TicTacToe.css'
import { Box } from '/src/componenets/TicTacToe/Box.jsx';
import TestDiv from '/src/componenets/TicTacToe/TestDiv.jsx';
import { Results } from '../componenets/TicTacToe/Results.jsx';

let player = "X";
let round = [];
let game = new Array(9).fill(null);
const boxLength = 9;
const gameHistory = [];
const roundHistory = [];

function setBoardTurnClass(currentTurn) {
  const board = document.getElementById("game-board");
  if (board) {
    board.classList.remove("turn-x", "turn-o");
    board.classList.add(currentTurn === "X" ? "turn-x" : "turn-o");
  }
}
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (game[a] && game[a] === game[b] && game[a] === game[c]) {
      return `Player ${game[a]} wins!`;
    }
  }
  if (!game.includes(null)) {
    return "It's a draw!";
  }
  return null;
}
let turn = 0;
function TicTacToe() {
  const [testDivs, setTestDivs] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [result, setResult] = useState(null);

  const restartGame = () => {
    turn = 0;
    setResult(null);
    player = "X";
    game.fill(null);
    // clear histories
    gameHistory.length = 0;
    roundHistory.length = 0;
    for (let i = 0; i < boxLength; i++) {
      const box = document.getElementById(`box-${i}`);
      if (box) {
        box.innerText = "";
        box.style.backgroundColor = "";
        box.style.color = "";
      }
    }
    setTestDivs([]);
    setNextId(0);
    setBoardTurnClass(player);
  }

  const PrevBtnClick = (index) => {
    // index is the number of moves to keep (1-based). Trim history to that length
    console.log('Reverting to turn', index);
    while (gameHistory.length > index) {
      gameHistory.pop();
    }
    // also trim round history to keep in sync
    while (roundHistory.length > index) {
      roundHistory.pop();
    }
    turn = index;
    // derive player and round from the saved round data (if any)
    const lastRound = roundHistory[roundHistory.length - 1] || null;
    if (!lastRound) {
      // no moves -> X to play
      round = [];
      player = "X";
    } else {
      // lastRound is [turnNumber, playerWhoMoved]
      round = [...lastRound];
      // next player is the opposite of the player who made the last move
      player = lastRound[1] === "X" ? "O" : "X";
    }
    // Restore the board state from history (or empty board if index === 0)
    const targetState = gameHistory[gameHistory.length - 1] || new Array(9).fill(null);
    game = [...targetState];
    for (let i = 0; i < boxLength; i++) {
      const box = document.getElementById(`box-${i}`);
      if (box) {
        box.innerText = game[i] || "";
        box.style.backgroundColor = "";
      }
    }
    // Trim displayed move buttons and nextId to match history
    setTestDivs(prev => prev.slice(0, index));
    setNextId(index);
    // Clear any game status (win/draw) and update board class
    setResult(null);
    setBoardTurnClass(player);
  };

  const boxClick = (index) => {
    const box = document.getElementById(`box-${index}`);
    console.log('Box clicked:', index);

  if (box.innerText !== "" || result) return;
    turn = turn + 1;
    console.log('Turn:', turn);
    round = [turn, player];
    box.innerText = player;
    game[index] = player;
  // Color the mark based on the player who just played
  if (player === "X") box.style.color = "blue";
  else box.style.color = "red";
    console.log(game);
    console.log(round);
  gameHistory.push([...game]);
  // record which player made this move so we can restore who should play next
  roundHistory.push([...round]);
    // create a new TestDiv entry for this click
    setTestDivs(prev => [...prev, { id: nextId, box: index, mark: game[index] }]);
    setNextId(n => n + 1);
    // Check for outcome BEFORE switching player, so the winner label matches the move just made
    const outcome = checkWin();
    if (outcome) {
      console.log('Outcome:', outcome);
      setResult(outcome);
      // Stop further turn switching or UI updates for this click
      return;
    }
  player = player === "X" ? "O" : "X";
    setBoardTurnClass(player);
}

  useEffect(() => {
    setBoardTurnClass(player);
  }, []);
  return (
    <>
      {result && <Results text={result} />}
      <div id="game-board">
        {Array.from({ length: boxLength }).map((_, i) => (
          <Box key={i} index={i} onClick={() => boxClick(i)} />
        ))}
      </div>
      <div id="test-divs-container">
        {testDivs.map(td => (
          <TestDiv key={td.id} turn={td.id + 1} onClick={() => PrevBtnClick(td.id + 1)} />
        ))}
      </div>
      <div>
        <button id="restart-game" onClick={() => restartGame()}>Restart Game</button>
      </div>
    </>
  )
}

export default TicTacToe
