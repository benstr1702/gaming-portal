import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import { validateSignUpForm } from "../../utils/signUp.auth.fun";

export default function UserProfile() {
	useEffect(() => {
		document.title = "Game Portal | Profile";
	}, []);

	const { loggedIn, updateUser, users } = useContext(UserContext);
	const [editingField, setEditingField] = useState(null);
	const [editValue, setEditValue] = useState("");
	const [errors, setErrors] = useState({});

	const startEditing = (field, value) => {
		setEditingField(field);
		setEditValue(value);
	};

	const handleEdit = (field) => {
		const formData = {
			...loggedIn,
			[field]: editValue,
		};

		if (!validateSignUpForm(formData, setErrors, users, loggedIn)) {
			return;
		}

		const userUUID = loggedIn.uuid; // Assuming loggedIn has uuid property
		updateUser(userUUID, { [field]: editValue });
		setEditingField(null);
		setErrors({});
	};

	const cancelEdit = () => {
		setEditingField(null);
		setErrors({});
	};

	return (
		<div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
				User Profile
			</h2>
			<div className="space-y-4">
				{Object.entries(loggedIn).map(([key, value]) => (
					<div
						key={key}
						className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
					>
						<span className="font-semibold text-gray-600 capitalize">
							{key}:
						</span>
						<div className="flex items-center">
							{editingField === key ? (
								<>
									<input
										type={
											key === "password"
												? "password"
												: "text"
										}
										value={editValue}
										onChange={(e) =>
											setEditValue(e.target.value)
										}
										className="border rounded px-2 py-1 mr-2"
									/>
									{errors[key] && (
										<span className="text-red-500 text-sm">
											{errors[key]}
										</span>
									)}
									<button
										onClick={() => handleEdit(key)}
										className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 transition-colors mr-2"
									>
										Save
									</button>
									<button
										onClick={cancelEdit}
										className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
									>
										Cancel
									</button>
								</>
							) : (
								<>
									<span className="text-gray-800 mr-4">
										{key === "password"
											? "••••••••"
											: value}
									</span>
									{(key === "username" ||
										key === "email" ||
										key === "password") && (
										<button
											onClick={() =>
												startEditing(key, value)
											}
											className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
										>
											Edit
										</button>
									)}
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
