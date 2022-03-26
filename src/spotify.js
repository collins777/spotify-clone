// redirect to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect to our homepage once authenticated with spotify
const redirectUri = "http://localhost:3000/";

// client id for spotify-clone
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

// scopes e.i. user permissons
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// get access token from url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=secretkey&name=brandon
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// login url for
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
