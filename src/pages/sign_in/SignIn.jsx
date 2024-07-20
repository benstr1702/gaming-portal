import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { validateSignInForm } from "../../functions/signIn.auth.fun";

export default function SignIn() {
	const [formData, setFormData] = useState({
		usernameOrEmail: "",
		password: "",
	});
	const { users, loggedIn, setLoggedIn } = useContext(UserContext);
	const [newSignInErrors, setNewSignInErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");
	const navigate = useNavigate();

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setNewSignInErrors({});
	}

	useEffect(() => {
		let timer;
		if (successMessage) {
			timer = setTimeout(() => {
				setSuccessMessage("");
			}, 1500);
		}
		return () => clearTimeout(timer);
	}, [successMessage]);

	function handleSubmit(e) {
		e.preventDefault();
		let [validated, returnedUser] = validateSignInForm(
			formData,
			users,
			setNewSignInErrors
		);
		if (validated) {
			console.log("Login Successful");
			setLoggedIn(returnedUser);
			setSuccessMessage("Login Successful! Redirecting...");

			// Set a timeout to navigate after showing the success message
			setTimeout(() => {
				navigate("/");
			}, 1500);
		} else {
			console.log("Login Failed");
		}
	}
	return (
		<div className="flex items-center justify-center h-screen ">
			<div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold mb-6 text-center ">
					Sign In
				</h2>
				{Object.keys(newSignInErrors).length > 0 && (
					<div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
						<h3 className="font-bold mb-2">
							Please correct the following errors:
						</h3>
						<ul className="list-disc list-inside">
							{Object.values(newSignInErrors).map(
								(error, index) => (
									<li key={index}>{error}</li>
								)
							)}
						</ul>
					</div>
				)}
				{successMessage && (
					<div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
						<p>{successMessage}</p>
					</div>
				)}
				<form onSubmit={handleSubmit} className="flex flex-col gap-3">
					<div>
						<label
							htmlFor="username-or-email"
							className="text-sm font-medium block"
						>
							Username / Email
						</label>
						<Input
							type="text"
							name="usernameOrEmail"
							id="username-or-email"
							value={formData.usernameOrEmail}
							required
							onChange={handleChange}
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="text-sm font-medium block"
						>
							Password
						</label>
						<Input
							type="password"
							name="password"
							id="password"
							value={formData.password}
							required
							onChange={handleChange}
						/>
					</div>
					<Button onClick={handleSubmit}>Sign In</Button>
					<p>
						New to Game Portal?{" "}
						<Link to="/signup" className="text-blue-700 semi-bold">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
