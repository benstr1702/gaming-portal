// import { useEffect, useState } from "react";
// import UserContext from "./userContext";

// const UserContextProvider = ({ children }) => {
// 	const [users, setUsers] = useState(() => {
// 		const storedUsers = localStorage.getItem("users");
// 		return storedUsers ? JSON.parse(storedUsers) : [];
// 	});
// 	const [loggedIn, setLoggedIn] = useState(() => {
// 		const user = sessionStorage.getItem("loggedIn");
// 		return user ? JSON.parse(user) : {};
// 	});

// 	useEffect(() => {
// 		localStorage.setItem("users", JSON.stringify(users));
// 	}, [users]);

// 	useEffect(() => {
// 		sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
// 	}, [loggedIn]);
// 	function addUser(user) {
// 		setUsers((prev) => [...prev, user]); // Corrected to add the new user to the previous array
// 	}

// 	function updateUser(userUUID, updates) {
// 		setUsers((prevUsers) =>
// 			prevUsers.map((user) =>
// 				user.uuid === userUUID ? { ...user, ...updates } : user
// 			)
// 		);
// 	}
// 	return (
// 		<UserContext.Provider
// 			value={{
// 				users,
// 				setUsers,
// 				addUser,
// 				loggedIn,
// 				setLoggedIn,
// 				updateUser,
// 			}}
// 		>
// 			{children}
// 		</UserContext.Provider>
// 	);
// };

// export default UserContextProvider;
import { useEffect, useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
	const [users, setUsers] = useState(() => {
		const storedUsers = localStorage.getItem("users");
		return storedUsers ? JSON.parse(storedUsers) : [];
	});
	const [loggedIn, setLoggedIn] = useState(() => {
		const user = sessionStorage.getItem("loggedIn");
		return user ? JSON.parse(user) : {};
	});

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	useEffect(() => {
		sessionStorage.setItem("loggedIn", JSON.stringify(loggedIn));
	}, [loggedIn]);

	function addUser(user) {
		setUsers((prev) => [...prev, user]);
	}
	function deleteUser(uuid) {
		const newUsers = users.filter((u) => u.uuid !== uuid);
		setUsers(newUsers);
	}
	function updateUser(userUUID, updates) {
		setUsers((prevUsers) =>
			prevUsers.map((user) =>
				user.uuid === userUUID ? { ...user, ...updates } : user
			)
		);

		// Update the loggedIn user if it matches the updated userUUID
		if (loggedIn.uuid === userUUID) {
			setLoggedIn((prevUser) => ({
				...prevUser,
				...updates,
			}));
		}
	}

	return (
		<UserContext.Provider
			value={{
				users,
				setUsers,
				addUser,
				loggedIn,
				setLoggedIn,
				updateUser,
				deleteUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
