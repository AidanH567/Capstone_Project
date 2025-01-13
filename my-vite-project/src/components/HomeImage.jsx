import "../styles/HomeImage.css";
import { motion } from "motion/react";

export default function HomeImage() {
  return (
    <motion.div
      className="homeimage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="homeimage-image"
        src="/images/Self_Image.jpg"
        alt="Background"
      />
      <div className="homeimage-text-div">
        <h1 className="homeimage-h1">Aidan Herstik</h1>
        <p>
          Palawa Artist Kaytlyn Johnson breaks onto the scene with her debut
          single.
        </p>
        <a
          className="homeimage-button"
          href="https://open.spotify.com/artist/your-spotify-id"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen Now
        </a>
      </div>
    </motion.div>
  );
}
