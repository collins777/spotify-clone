import React from "react";
import "./Body.css";
import { Header } from "../../components";
import { useStateValue } from "../../StateProvider";
import { SongRow } from "../../components";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="Discover Weekly " />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discovery Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon fontSize="large" className="body__shuffle" />
          <FavoriteIcon />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
