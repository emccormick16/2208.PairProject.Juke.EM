const router = require("express").Router();
const { Album, Artist, Song } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allAlbums = await Album.findAll({ include: Artist });
    res.send(allAlbums);
  } catch (error) {
    next(error);
  }
});

router.get("/:albumId", async (req, res, next) => {
  try {
    const selectedAlbum = await Album.findByPk(+req.params.albumId, {
      include: [Artist, Song],
    });
    res.send(selectedAlbum);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
