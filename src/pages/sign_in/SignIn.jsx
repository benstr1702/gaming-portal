import React, { useState, useContext } from "react";
import UserContext from "../../contexts/userContext";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function SignIn() {
  const [formData, setFormData] = useState([]);
  const { users } = useContext(UserContext);

  function handleChange() {
    console.log("change");
  }

  function handleSubmit() {
    console.log("submit");
  }
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center ">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label
              htmlFor="username-or-email"
              className="text-sm font-medium block"
            >
              Username / Email
            </label>
            <Input
              type="text"
              name="username-or-email"
              id="username-or-email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium block">
              Password
            </label>
            <Input
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
            />
          </div>
          <Button onClick={handleSubmit}>Sign In</Button>
          <p>
            New to Game Portal?{" "}
            <Link to="/signup" className="text-blue-700 semi-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
