const db = require("./db");
const Artist = require("./artist");
const Song = require("./song");
const Album = require("./album");

// require each of your models here...
//Artist <=> Song relationship
Artist.hasMany(Song);
Song.belongsTo(Artist);

// Song <=> Album relationship
Album.hasMany(Song);
Song.belongsTo(Album);

//Artist <=> Album relationship
Artist.hasMany(Album);
Album.belongsTo(Artist);

// ...and give them some nice associations here!

module.exports = {
  db,

  Artist,
  Album,
  Song,

  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
};
