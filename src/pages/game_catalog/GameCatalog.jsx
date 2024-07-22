import React from "react";
import UserContext from "../../contexts/userContext";
import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SignInToPlayLabel from "../../components/ui/SignInToPlayLabel";

function GameCatalog() {
	useEffect(() => {
		document.title = "Game Portal | Games";
	}, []);
	const { loggedIn, users } = useContext(UserContext);
	const loggedInUser = users.find((u) => u.uuid === loggedIn.uuid);

	const LoggedInCatalog = () => {
		return (
			<div className="flex flex-col items-center justify-center mt-9 gap-10">
				<h1 className="text-green-900 text-5xl font-sans font-bold mb-6">
					Choose a game to play
				</h1>
				<div className="flex flex-col justify-center items-center gap-7">
					<div className="text-center">
						<h3 className="text-xl font-medium mb-2">
							Tic Tac Toe
						</h3>
						<Link to="ttt">
							<img
								src="/tictactoe.jpg"
								alt="tic tac toe image"
								width={400}
								height={400}
								className="rounded object-cover h-60 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
							/>
						</Link>
					</div>
					<div className="text-center">
						<h3 className="text-xl font-medium mb-2">
							Minesweeper
						</h3>
						<Link to="minesweeper">
							<img
								src="/minesweeper.png"
								alt="minesweeper image"
								className="rounded object-cover h-60 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
								width={400}
								height={400}
							/>
						</Link>
					</div>
					<div className="text-center">
						<h3 className="text-xl font-medium mb-2">
							Rock Paper Scissors
						</h3>
						<Link to="rock-paper-scissors">
							<img
								src="/rockpaperscissors.jpg"
								alt="rock paper scissors image"
								width={400}
								height={400}
								className="rounded object-cover h-60 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
							/>
						</Link>
					</div>
				</div>
			</div>
		);
	};

	const LoggedOutCatalog = () => {
		return (
			<div className="flex flex-col items-center justify-center mt-9 gap-10">
				<h1 className="text-red-400 text-5xl font-sans font-bold mb-6">
					Choose a game to play
				</h1>
				<div className="flex flex-col justify-center items-center gap-7">
					<div className="text-center">
						<h3 className="text-xl font-medium mb-2">
							Rock Paper Scissors
						</h3>
						<Link to="rock-paper-scissors">
							<img
								src="/rockpaperscissors.jpg"
								alt="rock paper scissors image"
								width={400}
								height={400}
								className="rounded object-cover h-60 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
							/>
						</Link>
					</div>
					<div className="text-center">
						<h3 className="text-xl font-medium mb-2">
							Tic Tac Toe
						</h3>
						<div className="relative group cursor-not-allowed">
							<img
								src="/tictactoe.jpg"
								alt="tic tac toe image"
								width={400}
								height={400}
								className="rounded object-cover h-60 grayscale"
							/>
							<SignInToPlayLabel />
						</div>
					</div>
					<div className="text-center">
						<h3 className="text-xl font-medium mb-2">
							Minesweeper
						</h3>
						<div className="relative group cursor-not-allowed">
							<img
								src="/minesweeper.png"
								alt="minesweeper image"
								className="rounded object-cover h-60 grayscale"
								width={400}
								height={400}
							/>
							<SignInToPlayLabel />
						</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div>
			{loggedInUser ? <LoggedInCatalog /> : <LoggedOutCatalog />}
			<Outlet />
		</div>
	);
}

export default GameCatalog;
