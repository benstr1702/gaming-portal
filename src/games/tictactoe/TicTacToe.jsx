import React, { useEffect } from "react";

function TicTacToe() {
	useEffect(() => {
		document.title = "Game Portal | Tic Tac Toe";
	}, []);
	return (
		<div>
			<h1>TicTacToe</h1>
		</div>
	);
}

export default TicTacToe;
