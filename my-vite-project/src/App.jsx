import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { SongHolder } from "./context/SongsContext";
import {
  AccessTokenContext,
  AccessTokenHolder,
} from "./context/AccessTokenContext";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SongHolder>
        <AccessTokenHolder>
          <AuthContextProvider>
            <NavBar />
            <AppRoutes />
            <Footer />
          </AuthContextProvider>
        </AccessTokenHolder>
      </SongHolder>
    </>
  );
}

export default App;
