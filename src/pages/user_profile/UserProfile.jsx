import React from "react";
import UserContext from "../../contexts/userContext";
import { useContext, useEffect } from "react";

export default function UserProfile() {
	useEffect(() => {
		document.title = "Game Portal | Profile	";
	}, []);
	const { loggedIn } = useContext(UserContext);
	return (
		<div>
			{Object.entries(loggedIn).map(([key, value]) => (
				<p key={key}>
					{key}: {value}
				</p>
			))}
		</div>
	);
}
