import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Login, Player } from "./components";
import { getTokenFromUrl } from "./spotify";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = useStateValue();

  // runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      // returns user profile
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcGl9hH1BNJHk").then((response) => {
        dispatch({
          type: "SET_DISCOVERY_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
