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

//gareth the code we made is here
// import { useState, useEffect } from "react";
// import useSpotifyAuth from "./useSpotifyAuth";
// import { useSongsContext } from "../src/context/SongsContext";
// import { useAccessTokenContext } from "../src/context/AccessTokenContext";

// const useSpotifyPlaylist = (
//   playlistId

//   // authLoading,
//   // authError
// ) => {
//   // const [songs, setSongs] = useState([]);
//   const { songs, setSongs } = useSongsContext();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [offset, setOffset] = useState(0); // Track the offset for pagination
//   const { accessToken } = useAccessTokenContext();

//   const {
//     access_token,
//     loading: authLoading,
//     error: authError,
//   } = useSpotifyAuth();

//   const fetchPlaylistTracks = async (newOffset = 0, access_token) => {
//     // if (!access_token) return;
//     console.log(access_token);
//     setLoading(true);
//     try {
//       const result = await fetch(
//         // `https://api.spotify.com/v1/playlists/5oP9jFmcfNJRMLfIY1sZwV/tracks?offset=${newOffset}&limit=14`,

//         `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${newOffset}&limit=14`,
//         {
//           method: "GET",
//           headers: { Authorization: `Bearer ${access_token}` },
//         }
//       );

//       // if (!result.ok) {
//       //   throw new Error(`Failed to fetch playlist tracks: ${result.status}`);
//       // }

//       // await result.then((data) => setSongs(data.items));
//       await result.then((data) =>
//         console.log("data length", data.items.length)
//       );
//       // console.log(data.items);
//       // const newSongs = data.items.map((item) => item.track).then();
//       // setSongs(data.items); // Replace the song list
//     } catch (error) {
//       setError(`Error fetching playlist tracks: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch songs whenever the offset changes
//   useEffect(() => {
//     console.log("auth loading", authLoading);
//     console.log("auth error", authError);
//     if (authLoading == false || authError == false || !accessToken) {
//       fetchPlaylistTracks(offset, accessToken);
//     }
//   }, [songs, playlistId]);

//   // accessToken;

//   return {
//     // songs,
//     loading,
//     error,
//     fetchNext: () => setOffset((prevOffset) => prevOffset + 14),
//   };
// };

// export default useSpotifyPlaylist;

// import { useState, useEffect } from "react";
// import useSpotifyAuth from "./useSpotifyAuth";

// const useSpotifyPlaylist = (playlistId) => {
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [offset, setOffset] = useState(0);

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
//         `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${newOffset}&limit=14`,
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
//       );
//     } catch (error) {
//       setError(`Error fetching playlist tracks: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!authLoading && !authError) {
//       fetchPlaylistTracks(0);
//     }
//   }, [playlistId, accessToken, authLoading, authError]);

//   useEffect(() => {
//     if (offset > 0) {
//       fetchPlaylistTracks(offset);
//     }
//   }, [offset]);

//   const fetchNext = () => setOffset((prevOffset) => prevOffset + 14);

//   return {
//     songs,
//     loading,
//     error,
//     fetchNext,
//   };
// };

// export default useSpotifyPlaylist;
