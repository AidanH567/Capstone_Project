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

//gareth code
// import { useState, useEffect } from "react";
// import { useAccessTokenContext } from "../src/context/AccessTokenContext";

// const useSpotifyAuth = () => {
//   // const [accessToken, setAccessToken] = useState(null);
//   const { accessToken, setAccessToken } = useAccessTokenContext();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const clientId = "7a14e5db9231437883a1a2163b368ee9";
//   const clientSecret = "aef53b1820994dea8f8f718a46691f1d";
//   const _getToken = async () => {
//     try {
//       const response = await fetch("https://accounts.spotify.com/api/token", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
//         },
//         body: "grant_type=client_credentials",
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to fetch token: ${response.status}`);
//       }

//       const data = await response.json();
//       if (!accessToken) {
//         setAccessToken(data.access_token);
//       }

//       // Log the access token for debugging
//       console.log("Access Token:", data.access_token); // <-- Add this line to log the token
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // const _getToken = async () => {
//     //   try {
//     //     const response = await fetch("https://accounts.spotify.com/api/token", {
//     //       method: "POST",
//     //       headers: {
//     //         "Content-Type": "application/x-www-form-urlencoded",
//     //         Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
//     //       },
//     //       body: "grant_type=client_credentials",
//     //     });

//     //     if (!response.ok) {
//     //       throw new Error(`Failed to fetch token: ${response.status}`);
//     //     }

//     //     const data = await response.json();
//     //     if (!accessToken) {
//     //       setAccessToken(data.access_token);
//     //     }

//     //     // Log the access token for debugging
//     //     console.log("Access Token:", data.access_token); // <-- Add this line to log the token
//     //   } catch (error) {
//     //     setError(error.message);
//     //   } finally {
//     //     setLoading(false);
//     //   }
//     // };

//     _getToken();
//   }, []);

//   return { accessToken, loading, error };
// };

// export default useSpotifyAuth;

// // import { useState, useEffect } from "react";

// // const useSpotifyAuth = () => {
// //   const [accessToken, setAccessToken] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const CLIENT_ID = "7a14e5db9231437883a1a2163b368ee9";
// //   const REDIRECT_URI = "http://localhost:5173/listen";

// //   useEffect(() => {
// //     const getTokenFromUrl = () => {
// //       return window.location.hash
// //         .substring(1)
// //         .split("&")
// //         .reduce((initial, item) => {
// //           let parts = item.split("=");
// //           initial[parts[0]] = decodeURIComponent(parts[1]);
// //           return initial;
// //         }, {});
// //     };

// //     // Separate function for creating auth URL
// //     const createAuthUrl = () => {
// //       const scopes = [
// //         "playlist-read-private",
// //         "playlist-read-collaborative",
// //         "user-read-email",
// //         "user-read-private",
// //       ];

// //       return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
// //         REDIRECT_URI
// //       )}&scope=${encodeURIComponent(
// //         scopes.join(" ")
// //       )}&response_type=token&show_dialog=true`;
// //     };

// //     try {
// //       // Log debugging info immediately
// //       console.log("Debug Info:");
// //       console.log("Redirect URI:", REDIRECT_URI);
// //       console.log("Client ID:", CLIENT_ID);

// //       const authUrl = createAuthUrl();
// //       console.log("Full auth URL:", authUrl);

// //       // Check if we're returning from Spotify auth
// //       const hash = getTokenFromUrl();
// //       if (hash.access_token) {
// //         setAccessToken(hash.access_token);
// //         window.location.hash = "";
// //         setLoading(false);
// //       } else {
// //         // Add a small delay before redirect to ensure logs are visible
// //         setTimeout(() => {
// //           window.location.href = authUrl;
// //         }, 1000); // 10-second delay
// //       }
// //     } catch (err) {
// //       console.error("Error in auth process:", err);
// //       setError(err.message);
// //     }
// //   }, []);

// //   return { accessToken, loading, error };
// // };

// // export default useSpotifyAuth;
// // import { useState, useEffect } from "react";

// // const useSpotifyAuth = () => {
// //   const [accessToken, setAccessToken] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const CLIENT_ID = "7a14e5db9231437883a1a2163b368ee9";
// //   const REDIRECT_URI = "http://localhost:5173";

// //   useEffect(() => {
// //     const getTokenFromUrl = () => {
// //       return window.location.hash
// //         .substring(1)
// //         .split("&")
// //         .reduce((initial, item) => {
// //           let parts = item.split("=");
// //           initial[parts[0]] = decodeURIComponent(parts[1]);
// //           return initial;
// //         }, {});
// //     };

// //     // Separate function for creating auth URL
// //     const createAuthUrl = () => {
// //       const scopes = [
// //         "playlist-read-private",
// //         "playlist-read-collaborative",
// //         "user-read-email",
// //         "user-read-private",
// //       ];

// //       return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
// //         REDIRECT_URI
// //       )}&scope=${encodeURIComponent(
// //         scopes.join(" ")
// //       )}&response_type=token&show_dialog=true`;
// //     };

// //     try {
// //       // Log debugging info immediately
// //       console.log("Debug Info:");
// //       console.log("Redirect URI:", REDIRECT_URI);
// //       console.log("Client ID:", CLIENT_ID);

// //       const authUrl = createAuthUrl();
// //       console.log("Full auth URL:", authUrl);

// //       // Check if we're returning from Spotify auth
// //       const hash = getTokenFromUrl();
// //       if (hash.access_token) {
// //         setAccessToken(hash.access_token);
// //         window.location.hash = "";
// //         setLoading(false);
// //       } else {
// //         // Add a small delay before redirect to ensure logs are visible
// //         setTimeout(() => {
// //           window.location.href = authUrl;
// //         }, 1000); // 10-second delay
// //       }
// //     } catch (err) {
// //       console.error("Error in auth process:", err);
// //       setError(err.message);
// //     }
// //   }, []);

// //   return { accessToken, loading, error };
// // };

// // export default useSpotifyAuth;
