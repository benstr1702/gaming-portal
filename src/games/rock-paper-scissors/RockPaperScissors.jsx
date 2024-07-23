import { useState } from "react";
import Rock from "./components/Rock";
import Scissors from "./components/Scissors";
import Paper from "./components/Paper";
function RockPaperScissors() {
	const [options] = useState(["rock", "paper", "scissors"]);
	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);
	const [result, setResult] = useState("");

	function pickRandomRPS() {
		return options[Math.floor(Math.random() * options.length)];
	}

	function handleClick(choice) {
		const compChoice = pickRandomRPS();
		setUserChoice(choice);
		setComputerChoice(compChoice);
		setResult(determineWinner(choice, compChoice));
	}

	function determineWinner(user, computer) {
		if (user === computer) return "It's a draw!";
		if (
			(user === "rock" && computer === "scissors") ||
			(user === "scissors" && computer === "paper") ||
			(user === "paper" && computer === "rock")
		)
			return "You win!";
		return "Computer wins!";
	}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-purple-300 p-4  gap-5">
			<h1 className="text-4xl ">Rock Paper Scissors </h1>
			<div className="flex items-center justify-evenly w-[40rem] h-[20rem] bg-slate-900 rounded-xl">
				<Rock onClick={() => handleClick("rock")} />
				<Paper onClick={() => handleClick("paper")} />
				<Scissors onClick={() => handleClick("scissors")} />
			</div>
			{userChoice && computerChoice && (
				<div className="mt-4 text-xl">
					<p>User choice: {userChoice}</p>
					<p>Computer choice: {computerChoice}</p>
					<p>Result: {result}</p>
				</div>
			)}
		</div>
	);
}

export default RockPaperScissors;
