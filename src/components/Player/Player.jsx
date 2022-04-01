import React from "react";
import "./Player.css";
import { Sidebar, Body, Footer } from "../../components";

const Player = () => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
