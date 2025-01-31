import React, { useState, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import UserContext from "../../../contexts/userContext";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const { loggedIn, setLoggedIn } = useContext(UserContext);
	const menuItems = ["Home", "About", "Games"];
	if (Object.keys(loggedIn).length > 0) {
		menuItems.push("Profile");
	}

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleSignUp = () => {
		navigate("/signup");
	};

	const handleSignIn = () => {
		navigate("/signin");
		console.log("signin");
	};

	const handleSignOut = () => {
		setLoggedIn({});
		setTimeout(() => {
			navigate("/");
		}, 1000);
	};

	return (
		<header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
			<div className="flex flex-wrap items-center justify-between w-full gap-4">
				<Link to="/">
					<img src="/logo.svg" alt="logo" className="w-20" />
				</Link>
				<div
					id="collapseMenu"
					className={`${
						menuOpen ? "block" : "hidden"
					} lg:block lg:relative lg:bg-transparent lg:opacity-100 lg:shadow-none max-lg:fixed max-lg:bg-white max-lg:inset-0 max-lg:z-50`}
				>
					<button
						id="toggleClose"
						onClick={toggleMenu}
						className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 fill-black"
							viewBox="0 0 320.591 320.591"
						>
							<path
								d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
								data-original="#000000"
							></path>
							<path
								d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
								data-original="#000000"
							></path>
						</svg>
					</button>

					<ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
						<li className="mb-6 hidden max-lg:block">
							<a href="#">
								<img
									src="/logo.svg"
									alt="logo"
									className="w-16"
								/>
							</a>
						</li>
						{menuItems.map((item, index) => {
							const path =
								item === "Home"
									? "/"
									: item === "About"
									? "/about"
									: item === "Games"
									? "/games"
									: "/profile";
							return (
								<li
									key={index}
									className="max-lg:border-b border-gray-300 max-lg:py-3 px-3"
								>
									<Link
										to={path}
										className={`hover:text-[rgb(149,142,247)] text-gray-500 block font-semibold text-[15px] ${
											location.pathname === path
												? "underline"
												: ""
										}`}
									>
										{item}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex gap-3">
					{Object.keys(loggedIn).length === 0 && (
						<>
							<button
								className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[rgb(149,142,247)] bg-[rgb(149,142,247)] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[rgb(149,142,247)]"
								onClick={handleSignIn}
							>
								Sign In
							</button>
							<button
								className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[rgb(149,142,247)] bg-[rgb(149,142,247)] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[rgb(149,142,247)]"
								onClick={handleSignUp}
							>
								Sign Up
							</button>
						</>
					)}
					{Object.keys(loggedIn).length > 0 && (
						<>
							<div className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[rgb(149,142,247)] bg-[rgb(149,142,247)] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[rgb(149,142,247)]">
								Signed in as {loggedIn.username}
							</div>
							<button
								className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[rgb(149,142,247)] bg-[rgb(149,142,247)] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[rgb(149,142,247)]"
								onClick={handleSignOut}
							>
								Sign Out
							</button>
						</>
					)}
					<button
						id="toggleOpen"
						onClick={toggleMenu}
						className="lg:hidden"
					>
						<svg
							className="w-7 h-7"
							fill="#000"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
