import React, { useState, useEffect } from "react";
import Confetti from "../../components/common/Confetti";

const BinaryGuesser = () => {
	const [view, setView] = useState("menu");
	const [computerGuess, setComputerGuess] = useState(50);
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(100);
	const [computerWin, setComputerWin] = useState(false);
	const [computerGenNumber, setComputerGenNumber] = useState(null);
	const [userInput, setUserInput] = useState("");
	const [computerResponse, setComputerResponse] = useState("");
	const [showConfetti, setShowConfetti] = useState(false);
	useEffect(() => {
		if (view === "guess") {
			setComputerGenNumber(Math.floor(Math.random() * 100) + 1);
			setComputerResponse("");
			setUserInput("");
		} else if (view === "makeItGuess") {
			resetComputerGuess();
		}
	}, [view]);

	const resetComputerGuess = () => {
		setComputerGuess(50);
		setMin(1);
		setMax(100);
		setComputerWin(false);
	};

	const computerGuessNumber = () => {
		if (!computerWin) {
			const newGuess = Math.floor((min + max) / 2);
			setComputerGuess(newGuess);
		}
	};

	const handleGreater = () => {
		setMin(computerGuess + 1);
		computerGuessNumber();
	};

	const handleSmaller = () => {
		setMax(computerGuess - 1);
		computerGuessNumber();
	};

	const handleCorrect = () => {
		setComputerWin(true);
		setShowConfetti(true);
		setTimeout(() => setShowConfetti(false), 3000);
	};

	const checkUserNum = () => {
		const userGuess = parseInt(userInput);
		if (userGuess > 0 && userGuess <= 100) {
			if (userGuess < computerGenNumber) {
				setComputerResponse("My number is greater!");
			} else if (userGuess > computerGenNumber) {
				setComputerResponse("My number is smaller!");
			} else {
				setComputerResponse("Spot On!");
				setShowConfetti(true);
				setTimeout(() => setShowConfetti(false), 3000);
			}
		} else {
			setComputerResponse(
				"My number is a positive integer between 1 - 100..."
			);
		}
	};

	const renderView = () => {
		switch (view) {
			case "menu":
				return (
					<div className="flex flex-col items-center space-y-4">
						<h1 className="text-3xl font-bold mb-6">
							Binary Guesser
						</h1>
						<button
							onClick={() => setView("makeItGuess")}
							className="bg-blue-700 text-white px-6 py-2 rounded-lg w-48"
						>
							Make It Guess
						</button>
						<button
							onClick={() => setView("guess")}
							className="bg-blue-900 text-white px-6 py-2 rounded-lg w-48"
						>
							Guess
						</button>
						<button
							onClick={() => setView("instructions")}
							className="bg-gray-300 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
						>
							?
						</button>
					</div>
				);
			case "instructions":
				return (
					<div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
						<button
							onClick={() => setView("menu")}
							className="mb-4 text-blue-600"
						>
							<i className="fas fa-chevron-left mr-2"></i>Back
						</button>
						<ul className="list-disc pl-5 space-y-2">
							<li>
								<strong>Objective:</strong> The machine will
								think of a number between 1 and 100, and your
								goal is to guess it.
							</li>
							<li>
								<strong>Tries:</strong> The maximum number of
								tries is 7 (rounded up from the logarithm base 2
								of 100).
							</li>
							<li>
								<strong>Input:</strong> Enter your guess in the
								input field.
							</li>
							<li>
								<strong>Start Game:</strong> Click the
								appropriate menu button to begin the appropriate
								game mode.
							</li>
							<li>
								<strong>Output:</strong> The machine will
								provide feedback on your guess.
							</li>
							<li>
								<strong>Winning:</strong> Celebrate when you
								guess the correct number!
							</li>
							<li>
								<strong>Good luck!</strong> 🎲👍
							</li>
						</ul>
					</div>
				);
			case "makeItGuess":
				return (
					<div className="flex flex-col items-center space-y-4">
						<button
							onClick={() => setView("menu")}
							className="absolute top-4 left-4 text-blue-600"
						>
							<i className="fas fa-chevron-left mr-2"></i>Back
						</button>
						<h1 className="text-2xl font-bold mb-4">
							Your number is:
						</h1>
						<input
							readOnly
							type="number"
							value={computerGuess}
							className="border-2 border-gray-300 rounded-lg px-4 py-2 text-center text-2xl w-24"
						/>
						<div className="flex flex-col space-y-2">
							<button
								onClick={handleGreater}
								className="bg-blue-700 text-white px-6 py-2 rounded-lg w-48"
							>
								It's Greater
							</button>
							<button
								onClick={handleSmaller}
								className="bg-blue-700 text-white px-6 py-2 rounded-lg w-48"
							>
								It's Smaller
							</button>
							<button
								onClick={handleCorrect}
								className="bg-blue-900 text-white px-6 py-2 rounded-lg w-48"
							>
								Spot On!
							</button>
						</div>
					</div>
				);
			case "guess":
				return (
					<div className="flex flex-col items-center space-y-4">
						<button
							onClick={() => setView("menu")}
							className="absolute top-4 left-4 text-blue-600"
						>
							<i className="fas fa-chevron-left mr-2"></i>Back
						</button>
						<h1 className="text-2xl font-bold mb-4">
							Guess My Number!
						</h1>
						<h4 className="text-lg font-semibold">
							{computerResponse}
						</h4>
						<input
							type="number"
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
							className="border-2 border-gray-300 rounded-lg px-4 py-2 text-center text-2xl w-24"
						/>
						<button
							onClick={checkUserNum}
							className="bg-blue-900 text-white px-6 py-2 rounded-lg w-48"
						>
							Guess
						</button>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			{showConfetti && <Confetti />}
			<div className="bg-white p-8 rounded-xl shadow-2xl">
				{renderView()}
			</div>
		</div>
	);
};

export default BinaryGuesser;
