import React, { useState, useContext } from "react";
import UserContext from "../../contexts/userContext";
import { BrowserRouter, Link } from "react-router-dom";

export default function SignIn() {
	const [formData, setFormData] = useState([]);
	const { users } = useContext(UserContext);

	function handleChange() {
		console.log("change");
	}

	function handleSubmit() {
		console.log("submit");
	}
	return (
		<div className="flex items-center justify-center h-screen ">
			<div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold mb-6 text-center ">
					Sign In
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="username-or-email"
							className="text-sm font-medium block"
						>
							Username / Email
						</label>
						<input
							type="text"
							name="username-or-email"
							id="username-or-email"
							className="mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white"
							required
							onChange={handleChange}
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="password"
							className="text-sm font-medium block"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<button
							className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleSubmit}
						>
							Sign In
						</button>
					</div>
					<div className="mb-2">
						<p>
							New to Game Portal?{" "}
							<Link
								to="/signup"
								className="text-blue-700 semi-bold"
							>
								Sign Up
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
