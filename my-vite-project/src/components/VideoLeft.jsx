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
          <h1>Aidan Recital</h1>
          <p>
            This recital, held in December, marks the culmination of my 6 years
            of music study. It represents the ultimate climax of my musical
            journey, showcasing the skills and passion I've developed over the
            years. Watch as I take the stage and share this unforgettable
            performance with you.
          </p>
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
          <h1>Playing While On Holidays</h1>
          <p>
            While on holiday, I was jamming and having fun with some music, and
            my dad decided to grab the camera and film me. It's just a laid-back
            jam session, but I hope you enjoy the vibe and the spontaneous
            creativity! Thanks for watching!
          </p>
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
