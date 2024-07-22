import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export default function NotFound() {
	useEffect(() => {
		document.title = "404 Not Found";
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
			<p className="text-2xl text-gray-700 mb-8">Oops! Page Not Found</p>
			<p className="text-lg text-gray-600 mb-8 text-center max-w-md">
				We're sorry, but the page you're looking for doesn't exist or
				has been moved.
			</p>
			<Link
				to="/"
				className="px-6 py-3 bg-customPurple text-white rounded-lg hover:bg-rgba(149,142,247,0.6) transition duration-300"
			>
				Go Back Home
			</Link>
		</div>
	);
}
