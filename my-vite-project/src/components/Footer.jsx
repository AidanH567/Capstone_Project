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
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/c/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://soundcloud.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud />
        </a>
        <a
          href="https://open.spotify.com/artist/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
        <a
          href="https://music.apple.com/artist/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple />
        </a>
        <a
          href="https://music.amazon.com/artists/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAmazon />
        </a>
      </div>
      <p>This will have copyright info</p>
    </div>
  );
}

export default Footer;
