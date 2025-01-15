import { useState, useEffect } from "react";

const useSpotifyAuth = () => {
  // State to store the access token
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to run the authentication process when the component mounts
  useEffect(() => {
    const clientId = "7a14e5db9231437883a1a2163b368ee9";
    const clientSecret = "aef53b1820994dea8f8f718a46691f1d";

    // Function to fetch the access token from Spotify's API
    const _getToken = async () => {
      try {
        // Make a POST request to Spotify's token endpoint to get the access token
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
          },
          body: "grant_type=client_credentials",
        });

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Failed to fetch token: ${response.status}`);
        }

        const data = await response.json();
        // Store the access token in the state
        setAccessToken(data.access_token);

        console.log("Access Token:", data.access_token);
      } catch (error) {
        setError(error.message);
      } finally {
        // Set loading to false once the request completes (either success or failure)
        setLoading(false);
      }
    };
    // Call the function to fetch the token
    _getToken();
  }, []);

  return { accessToken, loading, error };
};

export default useSpotifyAuth;
