import { useState, useEffect } from "react";
import useSpotifyAuth from "./useSpotifyAuth"; // Import the auth hook

const useSpotifyPlaylist = (playlistId) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the useSpotifyAuth hook to get the access token
  const {
    accessToken,
    loading: authLoading,
    error: authError,
  } = useSpotifyAuth();

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      if (!accessToken) return; // Don't fetch if no access token

      try {
        const result = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        if (!result.ok) {
          throw new Error(`Failed to fetch playlist tracks: ${result.status}`);
        }

        const data = await result.json();
        const tenItems = data.items.slice(0, 10).map((item) => item.track);
        setSongs(tenItems); // Update songs state
        setLoading(false);
      } catch (error) {
        setError(`Error fetching playlist tracks: ${error.message}`);
        setLoading(false);
      }
    };

    // Only fetch the playlist if the access token is available and it's not still loading
    if (!authLoading && !authError) {
      fetchPlaylistTracks();
    }
  }, [accessToken, playlistId, authLoading, authError]); // Depend on accessToken and playlistId

  // Return the loading state, songs, and any error
  return { songs, loading: authLoading || loading, error: authError || error };
};

export default useSpotifyPlaylist;
