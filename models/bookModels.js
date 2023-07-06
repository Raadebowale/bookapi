const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Book = new Schema({
  bookname: {
    type: String,
  },
  author: {
    type: String,
  },
  isbn: {
    type: String,
  },
  price: {
    type: Number,
  },
  totalReview: {
    type: Number,
  },
  createdAt: {
    type: Date,
  },
});

const allBooks = model("Books", Book);
module.exports = allBooks; // making this function public in the app
