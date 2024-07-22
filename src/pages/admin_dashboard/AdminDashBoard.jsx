import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/userContext";

export default function AdminDashBoard() {
	useEffect(() => {
		document.title = "Game Portal | Dashboard";
	}, []);
	const { users } = useContext(UserContext);
	return (
		<ul className="list-none max-w-md flex items-center gap-2 mt-3 ">
			{users.map((user, index) => (
				<li
					className={
						user.role === "admin"
							? "border-green-500 border-2"
							: "border-black border-2"
					}
					key={index}
				>
					<div>UUID: {user.uuid}</div>
					<div>Username: {user.username}</div>
					<div>Email: {user.email}</div>
					<div>Password: {user.password}</div>
				</li>
			))}
		</ul>
	);
}
