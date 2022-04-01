import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Login, Player } from "./components";
import { getTokenFromUrl } from "./spotify";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  // runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      // returns user profile
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });
    }

    // console.log("I HAVE A TOKEN >>>", token);
  }, []);
  console.log(user);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;
