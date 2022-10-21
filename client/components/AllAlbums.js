import React, { useState } from "react";

const AllAlbums = ({ dummyData }) => {
  // const [selectedAlbum, setSelectedAlbum] = useState([]);

  // const handleSelectedAlbum = async () => {
  //   const response = await fetch();
  //   const json = await response.json();
  //   setSelectedAlbum(json);
  //};

  return (
    <div className="container">
      {dummyData.map((album) => {
        return (
          <div key={album.id} id="albums" className="row wrap">
            <div className="album">
              <a>
                <img src="default-album.jpg" />
                <p>{album.name}</p>
                <small>{album.artist.name}</small>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllAlbums;
