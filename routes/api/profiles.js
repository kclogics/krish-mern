const express = require("express");

const router = express.Router();

// @route               GET api/profile/test
// @description         Test profiles route
// @acccess             Public

router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
