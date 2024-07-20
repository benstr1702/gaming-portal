import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { validateSignUpForm } from "../../utils/signUp.auth.fun";
import { v4 as uuidv4 } from "uuid";

export default function SignUp() {
	const navigate = useNavigate();
	const { addUser, users } = useContext(UserContext);

	const [formData, setFormData] = useState({
		email: "",
		username: "",
		password: "",
		role: "player",
		uuid: "",
	});
	const [errors, setErrors] = useState({});
	const [validated, setValidated] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if (validateSignUpForm(formData, setErrors, users)) {
			setValidated(true);
			const newUser = {
				username: formData.username.trim(),
				email: formData.email.trim(),
				password: formData.password,
				role: "player",
				uuid: uuidv4(),
			};
			addUser(newUser);
			setTimeout(() => {
				navigate("/signin");
			}, 1000);
			console.warn("SignUp Success");
		}
		setFormData({
			username: formData.username,
			email: formData.email,
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
				<form onSubmit={handleSubmit} className="flex flex-col gap-3">
					<div>
						<label
							htmlFor="username"
							className="text-sm font-medium block"
						>
							Username
						</label>
						<Input
							type="text"
							name="username"
							id="username"
							required
							onChange={handleChange}
							value={formData.username}
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="text-sm font-medium block"
						>
							Email
						</label>
						<Input
							type="email"
							name="email"
							id="email"
							required
							onChange={handleChange}
							value={formData.email}
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
							required
							onChange={handleChange}
							value={formData.password}
						/>
					</div>
					<Button onClick={handleSubmit}>Sign Up</Button>
					<p>
						Already have an account?{" "}
						<Link to="/signin" className="text-blue-700 semi-bold">
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
