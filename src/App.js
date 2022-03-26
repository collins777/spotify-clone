import React, { useEffect, useState } from "react";
import { Login } from "./components";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);

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
        console.log(user);
      });
    }

    console.log("I HAVE A TOKEN >>>", token);
  }, []);

  return (
    <div className="app">{token ? <h1>I am logged in.</h1> : <Login />}</div>
  );
};

export default App;
