import "../styles/HomeImage.css";
import { motion } from "motion/react";

export default function HomeImage2() {
  return (
    <motion.div
      className="homeimage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} // Fade in to opacity 1
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.5 }, ease: "easeInOut" }}
    >
      <img
        className="homeimage-image"
        src="/images/baackimage.JPG"
        alt="Background"
      />
      <div className="homeimage-text-div">
        <h1 className="homeimage-h1">Aidan Herstik</h1>
        <p>Listen to Aidan Herstik Now</p>
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
