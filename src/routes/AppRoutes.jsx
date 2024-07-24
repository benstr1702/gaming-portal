import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/sign_in/SignIn";
import SignUp from "../pages/sign_up/SignUp";
import AdminDashBoard from "../pages/admin_dashboard/AdminDashBoard";
import HomePage from "../pages/home_page/HomePage";
import UserProfile from "../pages/user_profile/UserProfile";
import ProtectedRoutes from "../utils/protected_routes/ProtectedRoutes";
import UserProtectedRoutes from "../utils/protected_routes/UserProtectedRoutes";
import NotFound from "../pages/error404/NotFound";
import GameCatalog from "../pages/game_catalog/GameCatalog";
import TicTacToe from "../games/tictactoe/TicTacToe";
import RockPaperScissors from "../games/rock-paper-scissors/RockPaperScissors";
import About from "../pages/about/About";
import BinaryGuesser from "../games/binary_guesser/BinaryGuesser";
function AppRoutes() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<About />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/admin-view" element={<AdminDashBoard />} />
			</Route>
			<Route element={<UserProtectedRoutes />}>
				<Route
					path="games/binary_guesser"
					element={<BinaryGuesser />}
				/>
				<Route path="/profile/" element={<UserProfile />} />
				<Route path="/games/ttt" element={<TicTacToe />} />
			</Route>
			<Route path="/games" element={<GameCatalog />} />
			<Route path="/games/rps" element={<RockPaperScissors />} />
		</Routes>
	);
}

export default AppRoutes;
