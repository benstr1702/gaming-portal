import { Children, useEffect, useState } from "react";
import userContext from "./userContext";
import { json } from "react-router-dom";

const UserContextProvider = ({ children }) => {
	const [users, setUsers] = useState(() => {
		const storedUsers = localStorage.getItem("users");
		return storedUsers ? JSON.parse(storedUsers) : [];
	});

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	function addUser(user) {
		setUsers((prev) => [...prev], user);
	}

	return (
		<UserContextProvider value={{ users, setUsers, addUser }}>
			{children}
		</UserContextProvider>
	);
};

export default UserContextProvider;
