import { useEffect, useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
	const [users, setUsers] = useState(() => {
		const storedUsers = localStorage.getItem("users");
		return storedUsers ? JSON.parse(storedUsers) : [];
	});
	const [loggedIn, setLoggedIn] = useState(() => {
		const user = localStorage.getItem("loggedIn");
		return user ? JSON.parse(user) : {};
	});

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	useEffect(() => {
		localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
	}, [loggedIn]);
	function addUser(user) {
		setUsers((prev) => [...prev, user]); // Corrected to add the new user to the previous array
	}

	return (
		<UserContext.Provider
			value={{ users, setUsers, addUser, loggedIn, setLoggedIn }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
