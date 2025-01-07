import React from "react";
import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist"; // Import the custom hook
import "../styles/SpotifyPlaylist.css";

const SpotifyPlaylist = ({ playlistId }) => {
  // Call the custom hook to get the playlist data
  const { songs, loading, error } = useSpotifyPlaylist(playlistId);

  // Loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (songs.length === 0) {
    return <p>No songs available</p>;
  }

  return (
    <div className="section-list">
      <ol className="Card-Ordered-list">
        {songs.map(({ id, album, name, uri, artists, preview_url }) => (
          <div className="card" key={id}>
            <img src={album.images[0].url} alt={name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">
                <a href={uri}>{`Title - ${name}`}</a>
              </h3>
              <p className="card-artist">
                <a href={artists[0].external_urls.spotify}>
                  {`Artist - ${artists[0].name}`}
                </a>
              </p>
              <p className="card-album">{`Album - ${album.name}`}</p>
              {preview_url ? (
                <audio controls className="card-audio">
                  <source src={preview_url} />
                </audio>
              ) : (
                <p className="card-song-check">{`${name} Preview is not available`}</p>
              )}
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default SpotifyPlaylist;
