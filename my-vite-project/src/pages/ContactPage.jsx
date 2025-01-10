import Contact from "../components/Contact";
import { motion } from "motion/react";

export default function ContactPage() {
  // Save in pages/AboutPage.jsx
  return (
    <motion.div
      className="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "50px",
          textAlign: "center",
        }}
      >
        Contact Aidan
      </h1>
      <Contact />
    </motion.div>
  );
}
