import React from "react";
import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist"; // Import the playlist hook
import SpotifyPlaylist from "../components/SpotifyPlaylist"; // Import the SpotifyPlaylist component

const ListeningPage = () => {
  const playlistId = "5oP9jFmcfNJRMLfIY1sZwV"; // Replace with your actual playlist ID

  // Use the playlist hook to get the songs, loading, and error state
  // const { songs, loading, error } = useSpotifyPlaylist(playlistId);

  // if (loading) return <div>Loading playlist...</div>;
  // if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <div>
      <div
        style={{
          display: "flex", // Enable flexbox
          justifyContent: "center", // Center content horizontally
          alignItems: "center", // Center content vertically
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>Listen to my favourite songs</h1>
      </div>
      {/* Pass the fetched songs to the SpotifyPlaylist component */}
      {/* <SpotifyPlaylist songs={songs} /> */}
      <SpotifyPlaylist />
    </div>
  );
};

export default ListeningPage;
