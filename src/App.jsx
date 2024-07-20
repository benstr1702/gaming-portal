import "./App.css";
import Header from "./components/common/header/Header";
import SignUp from "./pages/sign_up/SignUp";
import SignIn from "./pages/sign_in/SignIn";
import UserContextProvider from "./contexts/UserContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./contexts/userContext"; // import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Games from './pages/Games';

function App() {
  const { users } = useContext(UserContext);

  const handleClick = () => {
    console.log(users);
  };
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative bg-cover bg-center h-screen bg-hero-image">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                  <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                    Welcome to the 2024 Game Portal
                  </h1>
                  <p className="text-lg sm:text-2xl mb-8">
                    Sign-In / Sign-Up and start playing now!
                  </p>
                  <button
                    className="px-6 py-3 text-lg font-semibold text-white bg-customPurple rounded-full hover:bg-customPurple transition duration-300"
                    onClick={handleClick}
                  >
                    Start Playing
                  </button>
                </div>
              </div>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
