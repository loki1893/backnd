const express = require("express");
const router = express.Router();

const {
  allPostsMain,
} = require("../controllers/postCtr");

router.get("/",  allPostsMain);

module.exports = router;