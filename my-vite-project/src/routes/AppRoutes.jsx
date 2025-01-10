import { Route, Routes, useBlocker, useLocation } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import VideoPage from "../pages/VideoPage";
import ContactPage from "../pages/ContactPage";
import MusicPage from "../pages/MusicPage";
import BlogPage from "../pages/BlogPage";
import ListeningPage from "../pages/ListeningPage";
import LoginPage from "../pages/LoginPage";
import WritePage from "../pages/WritePage";
import RegisterPage from "../pages/RegisterPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import { AnimatePresence } from "motion/react";

function AppRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage {...props} />} />
        <Route path="/about" element={<AboutPage {...props} />} />
        <Route path="/videos" element={<VideoPage {...props} />} />
        <Route path="/contact" element={<ContactPage {...props} />} />
        <Route path="/music" element={<MusicPage {...props} />} />

        <Route path="/blog" element={<BlogPage {...props} />} />

        <Route path="/listen" element={<ListeningPage {...props} />} />

        <Route path="/login" element={<LoginPage {...props} />} />
        <Route path="/register" element={<RegisterPage {...props} />} />
        <Route path="/write" element={<WritePage {...props} />} />
        <Route path="/post/:id" element={<SingleBlogPage {...props} />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AppRoutes;
