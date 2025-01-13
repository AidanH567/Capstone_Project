import Contact from "../components/Contact";
import { motion } from "motion/react";

export default function ContactPage() {
  // Save in pages/AboutPage.jsx
  return (
    <motion.div
      className="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
        Contact
      </h1>
      <Contact />
    </motion.div>
  );
}
