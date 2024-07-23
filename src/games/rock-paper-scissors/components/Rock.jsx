import React from "react";

function Rock({ onClick }) {
	return (
		<button
			className="text-5xl border border-green-500 rounded-full p-5 bg-green-300"
			onClick={onClick}
		>
			🪨
		</button>
	);
}

export default Rock;
