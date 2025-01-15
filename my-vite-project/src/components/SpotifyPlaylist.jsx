import React, { useState } from "react";
import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist";
import "../styles/SpotifyPlaylist.css";

const SpotifyPlaylist = ({ playlistId }) => {
  // State to track the currently selected playlist ID
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(
    "5oP9jFmcfNJRMLfIY1sZwV"
  );

  // Calling the custom hook to fetch songs for the selected playlist
  const { songs, loading, error, fetchNext } =
    useSpotifyPlaylist(selectedPlaylistId);

  const playlists = [
    { id: "2MaRfSW2aLwAqYdymIX82y", name: "Jazz" },
    { id: "2Bs31HHeuEIHb616kLTAVb", name: "Fusion" },
    { id: "5oP9jFmcfNJRMLfIY1sZwV", name: "Alternitive" },
    { id: "15CmdU0K2hmU1g3vbUbqDm", name: "Rock" },
  ];

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="section-list">
      <div className="button-container">
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => setSelectedPlaylistId(playlist.id)}
            className={`playlist-button ${
              selectedPlaylistId === playlist.id ? "selected" : ""
            }`}
          >
            {playlist.name}
          </button>
        ))}
      </div>

      <ol className="Card-Ordered-list">
        {songs.map(({ id, album, name, uri, artists, href }) => (
          <div className="card" key={id}>
            <img src={album.images[0].url} alt={name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">
                <iframe
                  src={`https://open.spotify.com/embed/track/${id}`}
                  style={{ maxWidth: "300px", width: "100%" }}
                  height="80"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </h3>
              <p className="card-artist">
                <a
                  href={artists[0].external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`Artist - ${artists[0].name}`}
                </a>
              </p>
              <p className="card-album">{`Album - ${album.name}`}</p>
            </div>
          </div>
        ))}
      </ol>

      {loading && <p>Loading...</p>}

      {!loading && (
        <button onClick={fetchNext} className="load-more-button">
          Next Songs
        </button>
      )}
    </div>
  );
};

export default SpotifyPlaylist;
