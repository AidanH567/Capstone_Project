import { useState, useEffect } from "react";
import useSpotifyAuth from "./useSpotifyAuth";

const useSpotifyPlaylist = (playlistId) => {
  const [songs, setSongs] = useState([]); // Stores the current list of songs
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0); // Controls the offset for pagination

  console.log(playlistId);

  // Custom hook to handle Spotify authentication and get the access token
  const {
    accessToken,
    loading: authLoading,
    error: authError,
  } = useSpotifyAuth();

  // Function to fetch the playlist tracks from the Spotify API
  const fetchPlaylistTracks = async (newOffset = 0) => {
    if (!accessToken || !playlistId) return;

    setLoading(true);

    try {
      const result = await fetch(
        // Fetch the tracks from the Spotify API using the provided playlistId and offset
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${newOffset}&limit=12`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      if (!result.ok) {
        throw new Error(`Failed to fetch playlist tracks: ${result.status}`);
      }

      const data = await result.json();
      console.log(data);
      const newSongs = data.items.map((item) => item.track); // Extract track information

      // Update the state with the new list of songs
      setSongs(newSongs); // Replace the current song list with the new one
    } catch (error) {
      setError(`Error fetching playlist tracks: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  // Reset the offset and song list whenever the playlistId changes
  useEffect(() => {
    setOffset(0);
    setSongs([]);
  }, [playlistId]);

  // Fetch songs whenever the access token or playlistId changes
  useEffect(() => {
    if (!authLoading && !authError) {
      fetchPlaylistTracks(offset);
    }
  }, [accessToken, playlistId, authLoading, authError, offset]); // Dependency array: runs when any of these change

  return {
    songs, // List of songs to display
    loading, // Loading state to show while fetching data
    error, // Error message, if any
    fetchNext: () => setOffset((prevOffset) => prevOffset + 12), // Function to increment offset and fetch the next set of songs
  };
};

export default useSpotifyPlaylist;
