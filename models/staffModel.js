const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const validator = require("validator");

const Staff = new Schema({
  staffName: {
    type: String,
    required: [true, "Please tell us your name"],
    trim: true,
  },
  staffEmail: {
    type: String,
    required: [true, "Please add your email address"],
    unique: [true, "Email already exists"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  staffPhone: {
    type: String,
    required: [true, "Please provide your phone number"],
    validate: [validator.isMobilePhone, "Please provide a valid phone number"],
  },
  staffAddress: {
    type: String,
    required: [true, "Kindly provide us your address"],
  },
  staffPassword: {
    type: String,
    required: [true, "Password must be provided"],
    validate: [validator.isStrongPassword, "Weak Password"],
  },
});

const allStaffs = model("Staffs", Staff);

module.exports = allStaffs;

/* staffName,
staffEmail,
staffPhone,
staffAddress,
staffPassword, */

/* name,
email,
phone,
address,
password, */
