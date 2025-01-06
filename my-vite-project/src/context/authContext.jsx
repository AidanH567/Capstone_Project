import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    console.log("Login inputs:", inputs);
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs
    );
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider> //might need to check over this again
  );
};

// const login = async (inputs) => {
//   await axios
//     .post("http://localhost:8800/api/auth/login", inputs)
//     .then((res) => setCurrentUser(res.data.username));
//   localStorage.setItem("user", JSON.stringify(currentUser));
//   // console.log(setCurrentUser(res.data));
//   // console.log(setCurrentUser(res.data));
// };
// const logout = async (inputs) => {
//   // setCurrentUser(null);
//   // localStorage.removeItem("user");
//   // console.log("test");
//   // await axios
//   //   .post("http://localhost:8800/api/auth/login", inputs)
//   //   .then((res) => console.log(res.data.data));
//   // // setCurrentUser(res.data);
//   await axios.post("http://localhost:8800/api/auth/login");
//   setCurrentUser(null);
// };
