import "./App.css";
import Header from "./components/common/header/Header";
import SignUp from "./pages/sign_up/SignUp";
import SignIn from "./pages/sign_in/SignIn";
import UserContextProvider from "./contexts/UserContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./contexts/userContext";
import AdminDashBoard from "./pages/admin_dashboard/AdminDashBoard";
// import About from './pages/About';
import HomePage from "./pages/home_page/HomePage";
import ProtectecRoutes from "./utils/protected_routes/ProtectecRoutes";
// import Contact from './pages/Contact';
// import Games from './pages/Games';

function App() {
	return (
		<UserContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route element={<ProtectecRoutes />}>
						<Route
							path="/admin-view"
							element={<AdminDashBoard />}
						/>
					</Route>
				</Routes>
			</Router>
		</UserContextProvider>
	);
}

export default App;
