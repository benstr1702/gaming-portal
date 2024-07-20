import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { useContext } from "react";
import React from "react";

export default function ProtectedRoutes() {
	const { users, loggedIn } = useContext(UserContext);

	const isLoggedIn = loggedIn && Object.keys(loggedIn).length > 0;
	const currentUser = isLoggedIn
		? users.find((user) => user.uuid === loggedIn.uuid)
		: null;

	return currentUser && currentUser.role === "admin" ? (
		<Outlet />
	) : (
		<Navigate to="/signin" />
	);
}
