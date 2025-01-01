import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/Homepage";
import VideoPage from "../pages/VideoPage";
import ContactPage from "../pages/ContactPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage {...props} />} />
      <Route path="/about" element={<AboutPage {...props} />} />
      <Route path="/videos" element={<VideoPage {...props} />} />
      <Route path="/contact" element={<ContactPage {...props} />} />
    </Routes>
  );
}
export default AppRoutes;
