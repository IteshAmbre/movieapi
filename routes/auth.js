const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/auth");

const { readTodos, createTodos } = require("../controllers/movies");

const verifyToken = require("../middleware/auth");

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/movies", readTodos, verifyToken);
router.post("/createmovie", createTodos, verifyToken);

router.post("/welcome", verifyToken);

module.exports = router;
