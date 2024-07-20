export const validateSignInForm = (
	formData,
	usersArray,
	setNewSignInErrors
) => {
	let isValid = true;
	let newSignInErrors = {};

	console.warn("FormData in validateSignInForm:", formData);
	console.warn("UsersArray in validateSignInForm:", usersArray);

	if (!Array.isArray(usersArray)) {
		console.error("UsersArray is not an array:", usersArray);
		newSignInErrors.user = "Unable to validate user at this time";
		setNewSignInErrors(newSignInErrors);
		return false;
	}

	const user = usersArray.find(
		(user) =>
			user.username === formData.usernameOrEmail ||
			user.email === formData.usernameOrEmail
	);

	if (!user) {
		console.error("User not found");
		newSignInErrors.user = "User does not exist";
		isValid = false;
	} else if (user.password === formData.password) {
		isValid = true;
	} else {
		newSignInErrors.password = "Incorrect Password";
		isValid = false;
	}

	console.error(newSignInErrors);
	setNewSignInErrors(newSignInErrors);
	return [isValid, user];
};
