import { useState, useEffect } from "react";

const useSpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const clientId = "7a14e5db9231437883a1a2163b368ee9";
    const clientSecret = "aef53b1820994dea8f8f718a46691f1d";

    const _getToken = async () => {
      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
          },
          body: "grant_type=client_credentials",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch token: ${response.status}`);
        }

        const data = await response.json();
        setAccessToken(data.access_token);

        // Log the access token for debugging
        console.log("Access Token:", data.access_token); // <-- Add this line to log the token
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    _getToken();
  }, []);

  return { accessToken, loading, error };
};

export default useSpotifyAuth;
