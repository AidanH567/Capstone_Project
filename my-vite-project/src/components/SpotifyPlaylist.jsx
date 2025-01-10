import React from "react";
import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist";
import "../styles/SpotifyPlaylist.css";

const SpotifyPlaylist = ({ playlistId }) => {
  const { songs, loading, error, fetchNext } = useSpotifyPlaylist(playlistId);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="section-list">
      <ol className="Card-Ordered-list">
        {songs.map(({ id, album, name, uri, artists, preview_url }) => (
          <div className="card" key={id}>
            <img src={album.images[0].url} alt={name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">
                <a href={uri}>{`Title - ${name}`}</a>
              </h3>
              <p className="card-artist">
                <a href={artists[0].external_urls.spotify}>
                  {`Artist - ${artists[0].name}`}
                </a>
              </p>
              <p className="card-album">{`Album - ${album.name}`}</p>
              {preview_url ? (
                <audio controls className="card-audio">
                  <source src={preview_url} />
                </audio>
              ) : (
                <p className="card-song-check">{`${name} Preview is not available`}</p>
              )}
            </div>
          </div>
        ))}
      </ol>
      {loading && <p>Loading...</p>}
      {!loading && (
        <button onClick={fetchNext} className="load-more-button">
          Next Songs
        </button>
      )}
    </div>
  );
};

export default SpotifyPlaylist;
//gareth code
// import React, { useEffect } from "react";
// import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist";
// import "../styles/SpotifyPlaylist.css";
// import { useSongsContext } from "../context/SongsContext";

// const SpotifyPlaylist = () => {
//   const playlistId = "5oP9jFmcfNJRMLfIY1sZwV"; // Replace with your actual playlist ID
//   const { loading, error, fetchNext } = useSpotifyPlaylist(playlistId);
//   const { songs } = useSongsContext();

//   useEffect(() => {
//     console.log("test song list", songs);
//     if (error) {
//       return <p>{error}</p>;
//     }
//   }, []);

//   return (
//     <div className="section-list">
//       <ol className="Card-Ordered-list">
//         {songs.map(({ id, album, name, uri, artists, preview_url }) => (
//           <div className="card" key={id}>
//             <img src={album.images[0].url} alt={name} className="card-image" />
//             <div className="card-content">
//               <h3 className="card-title">
//                 <a href={uri}>{`Title - ${name}`}</a>
//               </h3>
//               <p className="card-artist">
//                 <a href={artists[0].external_urls.spotify}>
//                   {`Artist - ${artists[0].name}`}
//                 </a>
//               </p>
//               <p className="card-album">{`Album - ${album.name}`}</p>
//               {preview_url ? (
//                 <audio controls className="card-audio">
//                   <source src={preview_url} />
//                 </audio>
//               ) : (
//                 <p className="card-song-check">{`${name} Preview is not available`}</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </ol>
//       {loading && <p>Loading...</p>}
//       {!loading && (
//         <button onClick={fetchNext} className="load-more-button">
//           Next Songs
//         </button>
//       )}
//     </div>
//   );
// };

// export default SpotifyPlaylist;

// // import React, { useState } from "react";
// // import useSpotifyPlaylist from "../../hooks/useSpotifyPlaylist";
// // import "../styles/SpotifyPlaylist.css";

// // const SpotifyPlaylist = () => {
// //   const [currentPlaylistId, setCurrentPlaylistId] = useState(
// //     "5oP9jFmcfNJRMLfIY1sZwV"
// //   ); // Default playlist ID
// //   const { songs, loading, error, fetchNext } =
// //     useSpotifyPlaylist(currentPlaylistId);

// //   const playlists = [
// //     { id: "5oP9jFmcfNJRMLfIY1sZwV", name: "Playlist 1" },
// //     { id: "37i9dQZF1DXcBWIGoYBM5M", name: "Playlist 2" },
// //     { id: "37i9dQZF1DX4JAvHpjipBk", name: "Playlist 3" },
// //     { id: "37i9dQZF1DWXRqgorJj26U", name: "Playlist 4" },
// //     { id: "37i9dQZF1DX2sUQwD7tbmL", name: "Playlist 5" },
// //   ];

// //   const handlePlaylistChange = (id) => {
// //     setCurrentPlaylistId(id);
// //   };

// //   if (error) {
// //     return <p>{error}</p>;
// //   }

// //   return (
// //     <div>
// //       <div className="playlist-buttons">
// //         {playlists.map((playlist) => (
// //           <button
// //             key={playlist.id}
// //             onClick={() => handlePlaylistChange(playlist.id)}
// //             className={currentPlaylistId === playlist.id ? "active" : ""}
// //           >
// //             {playlist.name}
// //           </button>
// //         ))}
// //       </div>

// //       <div className="section-list">
// //         <ol className="Card-Ordered-list">
// //           {songs.map(({ id, album, name, uri, artists, preview_url }) => (
// //             <div className="card" key={id}>
// //               <img
// //                 src={album.images[0].url}
// //                 alt={name}
// //                 className="card-image"
// //               />
// //               <div className="card-content">
// //                 <h3 className="card-title">
// //                   <a href={uri}>{`Title - ${name}`}</a>
// //                 </h3>
// //                 <p className="card-artist">
// //                   <a href={artists[0].external_urls.spotify}>
// //                     {`Artist - ${artists[0].name}`}
// //                   </a>
// //                 </p>
// //                 <p className="card-album">{`Album - ${album.name}`}</p>
// //                 {preview_url ? (
// //                   <audio controls className="card-audio">
// //                     <source src={preview_url} />
// //                   </audio>
// //                 ) : (
// //                   <p className="card-song-check">{`${name} Preview is not available`}</p>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </ol>
// //         {loading && <p>Loading...</p>}
// //         {!loading && songs.length > 0 && (
// //           <button onClick={fetchNext} className="load-more-button">
// //             Next Songs
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SpotifyPlaylist;
