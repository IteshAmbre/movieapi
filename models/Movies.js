const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    genre: {
      type: Array,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    directors: {
      type: Array,
      required: true,
    },
    actors: {
      type: Array,
    },
    released: {
      type: String,
    },
    duration: {
      type: String,
    },
    language: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    size: {
      type: String,
    },
    quality: {
      type: String,
    },
    format: {
      type: String,
    },
    storyline: {
      type: String,
    },
  },
  { timestamps: true, collection: "movies" },
);

module.exports = mongoose.model("Movies", movieSchema);
