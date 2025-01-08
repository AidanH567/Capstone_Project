import { useState, useEffect } from "react";
import useSpotifyAuth from "./useSpotifyAuth";

const useSpotifyPlaylist = (playlistId) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0); // Track the offset for pagination

  const {
    accessToken,
    loading: authLoading,
    error: authError,
  } = useSpotifyAuth();

  const fetchPlaylistTracks = async (newOffset = 0) => {
    if (!accessToken) return;
    const playlistid = "5oP9jFmcfNJRMLfIY1sZwV";

    setLoading(true);
    try {
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/5oP9jFmcfNJRMLfIY1sZwV/tracks?offset=${newOffset}&limit=14`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!result.ok) {
        throw new Error(`Failed to fetch playlist tracks: ${result.status}`);
      }

      const data = await result.json();
      const newSongs = data.items.map((item) => item.track);
      setSongs(newSongs); // Replace the song list
    } catch (error) {
      setError(`Error fetching playlist tracks: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch songs whenever the offset changes
  useEffect(() => {
    if (!authLoading && !authError) {
      fetchPlaylistTracks(offset);
    }
  }, [accessToken, playlistId, authLoading, authError, offset]);

  return {
    songs,
    loading,
    error,
    fetchNext: () => setOffset((prevOffset) => prevOffset + 14),
  };
};

export default useSpotifyPlaylist;

// import { useState, useEffect } from "react";
// import useSpotifyAuth from "./useSpotifyAuth";

// const useSpotifyPlaylist = (playlistId) => {
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [offset, setOffset] = useState(0); // Track the offset for pagination

//   const {
//     accessToken,
//     loading: authLoading,
//     error: authError,
//   } = useSpotifyAuth();

//   const fetchPlaylistTracks = async (newOffset = 0) => {
//     if (!accessToken || !playlistId) return;

//     setLoading(true);
//     try {
//       const result = await fetch(
//         `https://api.spotify.com/v1/playlists/5${playlistId}/tracks?offset=${newOffset}&limit=14`,
//         {
//           method: "GET",
//           headers: { Authorization: `Bearer ${accessToken}` },
//         }
//       );

//       if (!result.ok) {
//         throw new Error(`Failed to fetch playlist tracks: ${result.status}`);
//       }

//       const data = await result.json();
//       const newSongs = data.items.map((item) => item.track);
//       setSongs((prevSongs) =>
//         newOffset === 0 ? newSongs : [...prevSongs, ...newSongs]
//       ); // Replace or append songs
//     } catch (error) {
//       setError(`Error fetching playlist tracks: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset state and fetch new playlist when playlistId changes
//   useEffect(() => {
//     setSongs([]); // Clear the current songs
//     setOffset(0); // Reset offset
//     if (!authLoading && !authError) {
//       fetchPlaylistTracks(0); // Fetch the first batch of songs for the new playlist
//     }
//   }, [playlistId, accessToken, authLoading, authError]);

//   // Fetch more songs when 'Next Songs' is clicked
//   const fetchNext = () => setOffset((prevOffset) => prevOffset + 14);

//   // Trigger fetch when offset changes
//   useEffect(() => {
//     if (offset > 0) {
//       fetchPlaylistTracks(offset);
//     }
//   }, [offset]);

//   return {
//     songs,
//     loading,
//     error,
//     fetchNext,
//   };
// };

// export default useSpotifyPlaylist;
