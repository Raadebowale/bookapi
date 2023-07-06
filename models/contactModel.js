const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Contact = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

const allContacts = model("Contacts", Contact);
module.exports = allContacts; // making this function public in the app
