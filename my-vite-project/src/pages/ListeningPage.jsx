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
      <h1>Listen to my favourite songs</h1>
      {/* Pass the fetched songs to the SpotifyPlaylist component */}
      <SpotifyPlaylist songs={songs} />
    </div>
  );
};

export default ListeningPage;

// gareth code
// import React, { useEffect } from "react";
// import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist"; // Import the playlist hook
// import SpotifyPlaylist from "../components/SpotifyPlaylist"; // Import the SpotifyPlaylist component
// import useSpotifyAuth from "../../hooks/useSpotifyAuth";
// import { useSongsContext } from "../context/SongsContext";

// const ListeningPage = () => {
//   const playlistId = "5oP9jFmcfNJRMLfIY1sZwV"; // Replace with your actual playlist ID
//   // const {
//   //   accessToken,
//   //   loading: authLoading,
//   //   error: authError,
//   // } = useSpotifyAuth();
//   const { songs } = useSongsContext();

//   // // Use the playlist hook to get the songs, loading, and error state
//   const { loading, error } = useSpotifyPlaylist(
//     playlistId,
//     accessToken,
//     authLoading,
//     authError
//   );
//   useEffect(() => {
//     console.log(songs);
//     if (loading) return <div>Loading playlist...</div>;
//     if (error) return <div>{`Error: ${error}`}</div>;
//   }, []);

//   return (
//     <div>
//       <h1>Listen to my favourite songs</h1>
//       {/* Pass the fetched songs to the SpotifyPlaylist component */}
//       {/* {songs.length < 1 ? null : <SpotifyPlaylist songs={playlistId} />} */}
//       <SpotifyPlaylist />
//     </div>
//   );
// };

// export default ListeningPage;
