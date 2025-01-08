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
      setSongs((prevSongs) => [...prevSongs, ...newSongs]); // Append new songs
    } catch (error) {
      setError(`Error fetching playlist tracks: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the initial set of songs
  useEffect(() => {
    if (!authLoading && !authError) {
      fetchPlaylistTracks(offset);
    }
  }, [accessToken, playlistId, authLoading, authError, offset]);

  // Return the songs, loading state, error, and fetch function
  return {
    songs,
    loading,
    error,
    fetchMore: () => setOffset((prev) => prev + 14),
  };
};

export default useSpotifyPlaylist;

// 6m7772eFYI3DmxZXVD1tL3
