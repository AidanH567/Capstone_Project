import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <AppRoutes />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
