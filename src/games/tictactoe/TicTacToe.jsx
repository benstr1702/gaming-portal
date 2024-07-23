import React, { useEffect, useState, useMemo } from "react";
import Board from "./Board";

function TicTacToe() {
	useEffect(() => {
		document.title = "Game Portal | Tic Tac Toe";
	}, []);

	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	function handleClick(i) {
		if (isGameOver || squares[i]) return;
		const newSquares = squares.slice();
		newSquares[i] = xIsNext ? "X" : "O";
		setSquares(newSquares);
		setXIsNext((prev) => !prev);
	}

	const winner = useMemo(() => calculateWinner(squares), [squares]);

	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${xIsNext ? "X" : "O"}`;

	const isGameOver =
		Boolean(winner) || squares.every((square) => square !== null);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-purple-300 p-4  gap-5">
			<h1 className="text-4xl ">TicTacToe</h1>
			<h2>
				{isGameOver && Boolean(winner) && <p>We have a winner!</p>}
				{isGameOver && !Boolean(winner) && <p>Game tied!</p>}
			</h2>
			<Board
				onClick={handleClick}
				squares={squares}
				isGameOver={isGameOver}
			/>
		</div>
	);
}

function calculateWinner(squares) {
	const boardLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	let winner = null;

	boardLines.forEach((line) => {
		const [a, b, c] = line;

		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			winner = squares[a];
		}
	});

	return winner;
}

export default TicTacToe;
