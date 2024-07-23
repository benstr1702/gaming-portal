/**
 *
 * @param {object} formData formadata containing password, username and email
 * @param {(value: boolean) => void} setErrors to set errors
 * @param {Array} users all users
 * @param {object} currentUser current logged-in user data
 * @returns {boolean} true or false
 */
export const validateSignUpForm = (formData, setErrors, users, currentUser) => {
	let isValid = true;
	let newErrors = {};

	// Username Validation (taken, short)
	if (formData.username.trim().length < 3) {
		newErrors.username = "Username must be at least 3 characters long.";
		isValid = false;
	} else if (
		formData.username !== currentUser.username &&
		users.some((user) => user.username === formData.username)
	) {
		newErrors.username = "This username is already taken.";
		isValid = false;
	}

	// Email Validation (regex, taken)
	const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim;
	if (!emailRegex.test(formData.email)) {
		newErrors.email = "Enter a valid Email address.";
		isValid = false;
	} else if (
		formData.email !== currentUser.email &&
		users.some((user) => user.email === formData.email)
	) {
		newErrors.email = "There's already an account with this Email address.";
		isValid = false;
	}

	// Password Validation (regex)
	if (formData.password.length < 8) {
		newErrors.password = "Password must be at least 8 characters long.";
		isValid = false;
	} else if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
			formData.password
		)
	) {
		newErrors.password =
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
		isValid = false;
	}

	setErrors(newErrors);
	return isValid;
};
