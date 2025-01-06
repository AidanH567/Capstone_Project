import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../styles/Video.css";

export default function Video() {
  return (
    <div style={{ width: "50%" }}>
      <div className="ratio ratio-21x9">
        <iframe
          src="https://www.youtube.com/embed/xtqU-D_fybA?si=MHQni69_onJMVxGt"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
