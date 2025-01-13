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
        `https://api.spotify.com/v1/playlists/${playlistid}/tracks?offset=${newOffset}&limit=12`,
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
