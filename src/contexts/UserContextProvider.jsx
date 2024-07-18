import { useContext, useEffect, useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [users, setUsers] = useState(() => {
		const storedUsers = localStorage.getItem("users");
		return storedUsers ? JSON.parse(storedUsers) : [];
	});

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	function addUser(user) {
		setUsers((prev) => [...prev, user]); // Corrected to add the new user to the previous array
	}

	function authUser(creds) {
		const user = users.find((u) => {
			u.username === creds.userNameOrEmail ||
				(u.email === creds.userNameOrEmail &&
					u.password === creds.password);
		});
		if (user) {
			setAuthenticated(true);
			return true;
		} else {
			setAuthenticated(false);
			return false;
		}
	}

	return (
		<userContext.Provider
			value={{ users, setUsers, addUser, authUser, authenticated }}
		>
			{children}
		</userContext.Provider>
	);
};

export default UserContextProvider;
