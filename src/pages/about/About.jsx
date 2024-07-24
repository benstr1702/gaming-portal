import React, { useEffect } from "react";

function About() {
	useEffect(() => {
		document.title = "Game Portal | About";
	}, []);

	return (
		<div className="flex flex-col justify-center items-center min-h-min mt-10 flex-wrap">
			<h1 className="text-customPurple text-4xl bold">About Us</h1>
			<p className="text-center mt-4 text-xl px-4 w-[600px]">
				We are thrilled to launch our new Game Portal, a hub for fun and
				engaging games that everyone can enjoy. Our goal is to provide a
				diverse selection of games, including classics like Tic-Tac-Toe,
				Rock Paper Scissors, and Minesweeper, as well as exciting new
				additions. To play the games, simply navigate to the 'Games'
				section, select your desired game, and follow the on-screen
				instructions. Whether you are looking to test your strategic
				thinking with Tic-Tac-Toe, challenge your luck with Rock Paper
				Scissors, or solve puzzles with Minesweeper, we have something
				for everyone. Enjoy playing and feel free to share your feedback
				with us!
			</p>
		</div>
	);
}

export default About;
