import VideoLeft from "../components/VideoLeft";

export default function VideoPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="About">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <h1>Watch Me Play</h1>
      </div>
      <VideoLeft />
    </div>
  );
}
