import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/userContext";
import { validateEditProfileForm } from "../../utils/editUser.auth.fun";

export default function AdminDashBoard() {
	useEffect(() => {
		document.title = "Game Portal | Dashboard";
	}, []);

	const { users, updateUser, deleteUser } = useContext(UserContext);
	const [editingUser, setEditingUser] = useState(null);
	const [editingField, setEditingField] = useState(null);
	const [editValue, setEditValue] = useState("");
	const [errors, setErrors] = useState({});

	const startEditing = (user, field, value) => {
		setEditingUser(user);
		setEditingField(field);
		setEditValue(value);
	};

	const handleEdit = (user, field) => {
		const formData = {
			...user,
			[field]: editValue,
		};

		if (!validateEditProfileForm(formData, setErrors, users, user)) {
			return;
		}

		updateUser(user.uuid, { [field]: editValue });
		setEditingUser(null);
		setEditingField(null);
		setErrors({});
	};

	const cancelEdit = () => {
		setEditingUser(null);
		setEditingField(null);
		setErrors({});
	};

	const handleDelete = (userUUID) => {
		console.warn("uuid is : ", userUUID);
		if (window.confirm("Are you sure you want to delete this user?")) {
			deleteUser(userUUID);
		}
	};

	return (
		<div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
				Admin Dashboard
			</h2>
			<ul className="space-y-6">
				{users.map((user) => (
					<li
						key={user.uuid}
						className={`p-4 rounded-lg ${
							user.role === "admin"
								? "border-green-500"
								: "border-gray-300"
						} border-2`}
					>
						{Object.entries(user).map(([key, value]) => (
							<div
								key={key}
								className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
							>
								<span className="font-semibold text-gray-600 capitalize">
									{key}:
								</span>
								<div className="flex items-center">
									{editingUser === user &&
									editingField === key ? (
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
												onClick={() =>
													handleEdit(user, key)
												}
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
											<button
												onClick={() =>
													startEditing(
														user,
														key,
														value
													)
												}
												className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
											>
												Edit
											</button>
										</>
									)}
								</div>
							</div>
						))}
						<button
							onClick={() => handleDelete(user.uuid)}
							className="mt-4 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
						>
							Delete User
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
