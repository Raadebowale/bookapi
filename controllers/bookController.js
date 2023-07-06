const express = require("express");
const Books = require("./../models/bookModels");

exports.createBooks = async (req, res) => {
  try {
    const { bookname, author, isbn, price, totalReview } = req.body;
    const response = await Books.create({
      bookname,
      author,
      isbn,
      price,
      totalReview,
    });
    res.status(201).json({
      statusMessage: "Book created successfully",
      data: { response },
    });
  } catch (err) {
    res.status(404).json({
      statusMessage: "Error creating Book",
      data: err.message,
    });
  }
};

exports.getBooks = async (req, res) => {
  const allBooks = await Books.find();
  res.status(200).json({
    statusMessage: "Success",
    data: { allBooks },
  });
};

/* module.exports = {
  createBooks,
  getBooks,
}; */
