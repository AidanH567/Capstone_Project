import "../styles/Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaSoundcloud,
  FaSpotify,
  FaApple,
  FaAmazon,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="Links">
        <a
          href="https://www.instagram.com/aidanherstik3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/watch?v=xtqU-D_fybA&ab_channel=LesHerstik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://soundcloud.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud />
        </a>
        <a
          href="https://open.spotify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
        <a
          href="https://music.apple.com/au/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple />
        </a>
        <a
          href="https://music.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAmazon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
