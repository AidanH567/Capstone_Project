// import "bootstrap/dist/css/bootstrap.min.css";

import AboutPageLayout from "../components/AboutPageLayout";
import HomeImage from "../components/HomeImage";

// import Login from "../components/Login";
export default function AboutPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="HomePage-container">
      <HomeImage></HomeImage>
      <AboutPageLayout></AboutPageLayout>
    </div>
  );
}
