import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create context for authentication
export const AuthContext = createContext();

// AuthContextProvider component manages authentication state
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    // State to store the current user, checking localStorage for existing user data
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Login function sends credentials to backend and updates state
  const login = async (inputs) => {
    console.log("Login inputs:", inputs);
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      { withCredentials: true }
    );

    setCurrentUser(res.data);
  };

  // Logout function clears user data from state and backend
  const logout = async (inputs) => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null); // Clearing the currentUser state
  };

  // Persist user data to localStorage whenever currentUser changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // Returning the AuthContext.Provider to make currentUser, login, and logout available to child components
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
