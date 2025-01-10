import "../styles/Video.css";

export default function VideoLeft() {
  return (
    <>
      <div className="video-wrapper">
        <div className="video-container">
          <div className="video-div">
            <iframe
              src="https://www.youtube.com/embed/xtqU-D_fybA?si=MHQni69_onJMVxGt"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-container">
          <h1>This is the title</h1>
          <p>This is the description</p>
        </div>
      </div>
      <div className="video-wrapper" style={{ flexDirection: "row-reverse" }}>
        <div className="video-container">
          <div className="video-div">
            <iframe
              src="https://www.youtube.com/embed/9YYvj0_UCOo?si=8WJbB7m13hwNs5eT"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-container">
          <h1>This is the title</h1>
          <p>This is the description</p>
        </div>
      </div>
      <div className="video-wrapper">
        <div className="video-container">
          <div className="video-div">
            <iframe
              src="https://www.youtube.com/embed/xtqU-D_fybA?si=MHQni69_onJMVxGt"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-container">
          <h1>This is the title</h1>
          <p>This is the description</p>
        </div>
      </div>
    </>
  );
}
