import React from "react";

function Scissors({ onClick }) {
	return (
		<button
			className="text-5xl border border-green-500 rounded-full p-5 bg-green-300"
			onClick={onClick}
		>
			✂️
		</button>
	);
}

export default Scissors;
