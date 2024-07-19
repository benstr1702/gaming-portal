import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";

export default function SignUp() {
	const navigate = useNavigate();
	const { addUser, users } = useContext(UserContext);
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const validateForm = () => {
		let isValid = true;
		let newErrors = {};

		//Username Validation (taken , short)
		if (formData.username.trim().length < 3) {
			newErrors.username = "Username must be at least 3 characters long.";
			isValid = false;
		} else if (users.some((user) => user.username === formData.username)) {
			newErrors.username = "This username is already taken.";
			isValid = false;
		}

		//Email Validation (regex , taken)
		const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
		if (!emailRegex.test(formData.email)) {
			newErrors.email = "Enter a valid Email address.";
			isValid = false;
		} else if (users.some((user) => user.email === formData.email)) {
			newErrors.email =
				"Theres already an account with this Email address.";
			isValid = false;
		}

		//Password Validation (regex)
		if (formData.password.length < 8) {
			newErrors.password = "Password must be at least 8 characters long.";
			isValid = false;
		} else if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
				formData.password
			)
		) {
			newErrors.password =
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
			isValid = false;
		}
		console.error(newErrors);
		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if (validateForm()) {
			setValidated(true);
			const newUser = {
				username: formData.username.trim(),
				email: formData.email.trim(),
				password: formData.password,
			};
			addUser(formData);
			setTimeout(() => {
				navigate("/signin");
			}, 1500);
			console.warn("SignUp Success");
		}
		setFormData({
			username: "",
			email: "",
			password: "",
		});
	};
	return (
		<div className="flex items-center justify-center h-screen ">
			<div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold mb-6 text-center ">
					Sign Up
				</h2>
				{Object.keys(errors).length > 0 && (
					<div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
						<h3 className="font-bold mb-2">
							Please correct the following errors:
						</h3>
						<ul className="list-disc list-inside">
							{Object.values(errors).map((error, index) => (
								<li key={index}>{error}</li>
							))}
						</ul>
					</div>
				)}
				{validated && (
					<div className="mb-4 p-3 bg-green-100 border-green-400 text-green-700 rounded ">
						<h3 className="font-bold mb-2">
							Sign Up Completed Successfully! Redirecting...
						</h3>
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="text-sm font-medium block"
						>
							Username
						</label>
						<input
							type="text"
							name="username"
							id="username"
							className="mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white"
							required
							onChange={handleChange}
							value={formData.username}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="text-sm font-medium block"
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="mt-1 block text-black w-full p-2 rounded-md shadow-sm focus:ring-customPurple focus:border-white"
							required
							onChange={handleChange}
							value={formData.email}
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
							value={formData.password}
						/>
					</div>
					<div className="mb-4">
						<button
							className="w-full py-2 px-4 bg-black text-white rounded-md shadow-sm hover:bg-white hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleSubmit}
						>
							Sign Up
						</button>
					</div>
					<div className="mb-2">
						<p>
							Already have an account?{" "}
							<Link
								to="/signin"
								className="text-blue-700 semi-bold"
							>
								Sign In
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
