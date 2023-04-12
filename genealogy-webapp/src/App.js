// import React, { Component } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AppRoutes from './AppRoutes';
// import { Layout } from './components/Layout';
// import './custom.css';

// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//       <Layout>
//         <Routes>
//           {AppRoutes.map((route, index) => {
//             const { element, ...rest } = route;
//             return <Route key={index} {...rest} element={element} />;
//           })}
//         </Routes>
//       </Layout>
//     );
//   }
// }

import { useState } from 'react';

const facebook = {
	id: 1,
	name: "Facebook",
	imageUrl: 'https://cdn-icons-png.flaticon.com/512/174/174848.png',
	imageSize: 100,
}

const twitter = {
	id: 2,
	name: "Twitter",
	imageUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670151.png',
	imageSize: 100,
}

const instagram = {
	id: 3,
	name: "Instagram",
	imageUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
	imageSize: 100,
}

const socialNetworks = [facebook, twitter, instagram]

function MyButton() {
	const [count, setCount] = useState(0);
	function onClickButton() {
		setCount(count + 1);
	}

	return (
		<button onClick={onClickButton}>
			Click {count} times.
		</button>
	);
}

function Profile() {

	const listSN = socialNetworks.map(socialNetwork =>
		<li key={socialNetwork.id}>
			<h1>{socialNetwork.name}</h1>
			<img
				className="avatar"
				src={socialNetwork.imageUrl}
				alt={"Photo of " + socialNetwork.name}
				style={{
					width: socialNetwork.imageSize,
					height: socialNetwork.imageSize
				}}
			/>
		</li>
	);


	
	return (
		<>
			<ul>{listSN}</ul>
			<MyButton />
			<MyButton />
		</>
	);
}

// create the class Square
function Square({value, onSquareClick}) {
	return (
		<button className='square' onClick={onSquareClick}>
			{value}
		</button>
	);
}

// create the class Board
function Board({xIsNext, squares, onPlay}) {
	function handleClick(i) {
		// if the winner is exist, do nothing
		if(calculateWinner(squares) || squares[i]) {
			return;
		}
		const nextSquares = squares.slice();
		if(xIsNext) {
			nextSquares[i] = 'X';
		}else{
			nextSquares[i] = 'O';
		}
		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner){
		status = "Winner: " + winner;
	}else{
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
			<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
			<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
			<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
			<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
			<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
			<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
			<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
			<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
			<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}

/**
 * The function calculates the winner of a tic-tac-toe game by checking for matching values in the game
 * board.
 * @param squares - an array representing the current state of a tic-tac-toe board, where each element
 * can be "X", "O", or null. The function checks if there is a winner on the board and returns the
 * winner ("X" or "O") or null if there is no winner.
 * @returns The function `calculateWinner` returns the symbol of the player who has won the game
 * (either 'X' or 'O') if there is a winner, or `null` if there is no winner yet.
 */
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for(let i = 0; i < lines.length; i++){
		const [a, b, c] = lines[i];
		if(squares[a] === squares[b] && squares[a] === squares[c]){
			return squares[a];
		}
	}
	return null;
}

export default function Game(){
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handlePlay(nextSquares){
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove){
		setCurrentMove(nextMove);
	}

	const moves = history.map((squares, move) => {
		let description;
		if(move > 0){
			description = "Go to move #" + move;
		}else{
			description = "Game start!";
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>
					{description}
				</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	)
}



