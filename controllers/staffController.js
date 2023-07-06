const mongoose = require("mongoose");
const Staffs = require("./../models/staffModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.createStaff = async (req, res) => {
  try {
    const { staffName, staffEmail, staffPhone, staffAddress, staffPassword } =
      req.body;
    const inputPassword = staffPassword.toString();
    const hashedPassword = await bcrypt.hash(inputPassword, saltRounds);
    const response = await Staffs.create({
      staffName,
      staffEmail,
      staffPhone,
      staffAddress,
      staffPassword: hashedPassword,
    });
    res.status(201).json({
      statusMessage: "Staffs data created",
      data: response,
    });
  } catch (err) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const response = await Staffs.find();
    res.status(200).json({
      statusMessage: "Got all staffs",
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

exports.getStaff = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Staffs.findById(id);
    res.status(200).json({
      statusMessage: "Staffs Found",
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

exports.updateStaff = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Staffs.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      statusMessage: "Staff updated successfully",
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};
exports.deleteStaff = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Staffs.findByIdAndDelete(id);
    res.status(200).json({
      statusMessage: "Staff deleted successfully",
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

/* "staffName": "",
"staffEmail": "",
"staffPhone": "",
"staffAddress": "",
"staffPassword": "hashedPassword", */

// module.exports = { getStaff, createStaff };
