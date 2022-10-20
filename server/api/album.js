const router = require("express").Router();
const {
  models: { Album },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allAlbums = await Album.findAll();
    res.send(allAlbums);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
