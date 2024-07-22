import React from "react";

function SignInToPlayLabel() {
	return (
		<div
			className="
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-gray-800 text-white p-4 rounded-lg shadow-lg
            transition-all duration-300 ease-in-out
            opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100
            pointer-events-none
        "
		>
			<p className="text-center font-semibold whitespace-nowrap">
				Sign in to play this game!
			</p>
		</div>
	);
}

export default SignInToPlayLabel;
