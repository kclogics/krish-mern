const express = require("express");

const router = express.Router();

// @route               GET api/posts/test
// @description         Test posts route
// @acccess             Public

router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
