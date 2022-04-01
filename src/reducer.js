export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing...
  // token:
  //   "BQCz4UW1_VVEAV_OasTFZ4O881uEj6-NIMPb1dTPL3JlqTcEZe…_8cQrZTlOS_9LngXfx8xNJiTWqTMQxvY2_xFb9hdE-aXqvG8E",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
