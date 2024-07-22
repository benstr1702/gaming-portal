import "./App.css";
import Header from "./components/common/header/Header";

import UserContextProvider from "./contexts/UserContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<UserContextProvider>
			<Router>
				<Header />
				<AppRoutes />
			</Router>
		</UserContextProvider>
	);
}

export default App;
