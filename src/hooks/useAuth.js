// src/hooks/useAuth.js
import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";
import {
	validateSignInForm,
	validateSignUpForm,
} from "../utils/authValidation";

export function useAuth() {
	const { users, setUsers } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = useState(null);

	const signIn = (formData, setErrors) => {
		const [isValid, user] = validateSignInForm(formData, users, setErrors);
		if (isValid) {
			setLoggedInUser(user);
			return true;
		}
		return false;
	};

	const signUp = (formData, setErrors) => {
		const isValid = validateSignUpForm(formData, setErrors, users);
		if (isValid) {
			const newUser = { ...formData };
			setUsers([...users, newUser]);
			setLoggedInUser(newUser);
			return true;
		}
		return false;
	};

	const signOut = () => {
		setLoggedInUser(null);
	};

	return {
		user: loggedInUser,
		signIn,
		signUp,
		signOut,
	};
}
