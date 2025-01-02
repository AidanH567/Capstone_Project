import React from "react";

const SpotifyPlaylist = ({ songs }) => {
  // Function to render individual song cards
  const createTrack = (song) => {
    return (
      <div className="card" key={song.id}>
        <img
          src={song.album.images[0].url}
          alt={song.name}
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">
            <a href={song.uri}>{`Title - ${song.name}`}</a>
          </h3>
          <p className="card-artist">
            <a href={song.artists[0].external_urls.spotify}>
              {`Artist - ${song.artists[0].name}`}
            </a>
          </p>
          <p className="card-album">{`Album - ${song.album.name}`}</p>
          {song.preview_url ? (
            <audio controls className="card-audio">
              <source src={song.preview_url} />
            </audio>
          ) : (
            <p className="card-song-check">{`${song.name} Preview is not available`}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="section-list">
      <ol>
        {songs.length > 0 ? (
          songs.map((song) => createTrack(song))
        ) : (
          <p>No songs available</p>
        )}
      </ol>
    </div>
  );
};

export default SpotifyPlaylist;
