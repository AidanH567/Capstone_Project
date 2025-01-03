import React from "react";
import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist"; // Import the playlist hook
import SpotifyPlaylist from "../components/SpotifyPlaylist"; // Import the SpotifyPlaylist component

const ListeningPage = () => {
  const playlistId = "37i9dQZF1DWWQRwui0ExPn"; // Replace with your actual playlist ID

  // Use the playlist hook to get the songs, loading, and error state
  const { songs, loading, error } = useSpotifyPlaylist(playlistId);

  if (loading) return <div>Loading playlist...</div>;
  if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <div>
      <h1>Spotify Playlist</h1>
      {/* Pass the fetched songs to the SpotifyPlaylist component */}
      <SpotifyPlaylist songs={songs} />
    </div>
  );
};

export default ListeningPage;
