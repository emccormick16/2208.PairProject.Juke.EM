import React from "react";
import AllAlbums from "./components/AllAlbums";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

const dummyData = [
  {
    id: 1,
    name: "No Dummy",
    artworkUrl: "default-album.jpg",
    artistId: 1,
    artist: {
      id: 1,
      name: "The Crash Test Dummies",
    },
  },
  {
    id: 2,
    name: "I React to State",
    artworkUrl: "default-album.jpg",
    artistId: 1,
    artist: {
      id: 1,
      name: "The Crash Test Dummies",
    },
  },
];

const App = () => {
  return (
    <div id="main" className="row container">
      <Sidebar />
      <AllAlbums dummyData={dummyData} />
      <Player />
    </div>
  );
};

export default App;
