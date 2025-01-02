import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
