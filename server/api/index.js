const app = require("..");
// const express = require("express");
const router = require("express").Router();

// connect your API routes here!
// app.use(express.json());
router.use("/albums", require("./album"));
module.exports = router;
