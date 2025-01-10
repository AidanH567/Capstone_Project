// This context is getting the user data from the backend and passing it to the components to be used in the components
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.

import React, { useContext, useState } from "react";

// Creating a user context object to share data between components
export const SongsContext = React.createContext();
// SongsContext function to provide user data to components
export const SongHolder = (props) => {
  const [songs, setSongs] = useState([]);
  return (
    // Providing the current user and handleUser function to the context object
    <SongsContext.Provider value={{ songs, setSongs }}>
      {props.children}
    </SongsContext.Provider>
  );
};
export const useSongsContext = () => {
  return useContext(SongsContext);
};
