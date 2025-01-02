import Contact from "../components/Contact";

export default function ContactPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="About">
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
    </div>
  );
}
