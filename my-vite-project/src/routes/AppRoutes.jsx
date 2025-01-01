import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/Homepage";
import VideoPage from "../pages/VideoPage";
import ContactPage from "../pages/ContactPage";
import MusicPage from "../pages/MusicPage";
import GigsPage from "../pages/GigsPage";
import BlogPage from "../pages/BlogPage";
import QuestionsPage from "../pages/QuestionsPage";
import ListeningPage from "../pages/ListeningPage";
import CoursesPage from "../pages/CoursesPage";
import MerchPage from "../pages/MerchPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage {...props} />} />
      <Route path="/about" element={<AboutPage {...props} />} />
      <Route path="/videos" element={<VideoPage {...props} />} />
      <Route path="/contact" element={<ContactPage {...props} />} />
      <Route path="/music" element={<MusicPage {...props} />} />
      <Route path="/gigs" element={<GigsPage {...props} />} />
      <Route path="/blog" element={<BlogPage {...props} />} />
      <Route path="/questions" element={<QuestionsPage {...props} />} />
      <Route path="/listen" element={<ListeningPage {...props} />} />
      <Route path="/courses" element={<CoursesPage {...props} />} />
      <Route path="/merch" element={<MerchPage {...props} />} />
    </Routes>
  );
}
export default AppRoutes;
