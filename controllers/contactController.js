const mongoose = require("mongoose");
const Contacts = require("./../models/contactModel");
const HttpError = require("./../middleware/error");

// create a post
const createContact = async (req, res) => {
  // create some contact information in our modules
  try {
    // *Add validation*
    const { name, address, email, phoneNumber } = req.body;
    // console.log(name, address, email, phoneNumber);
    const response = await Contacts.create({
      name,
      address,
      email,
      phoneNumber,
    });
    res.status(201).json({
      statusMessage: "Data Created Successfully",
      data: response,
    });
  } catch (err) {
    // this line will catch error if one occured
    res.status(404).json({
      statusMessage: err.message,
    });
  }
};
/// get contact information by name
const getName = async (req, res) => {
  try {
    const name = await Contacts.findOne({ name: req.params.name });
    res.status(200).json({ name });
  } catch (err) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};
/// get contact information by phone
const getPhone = async (req, res) => {
  try {
    const phone = await Contacts.findOne({ phoneNumber: req.params.phone });
    res.status(200).json({ phone });
  } catch (err) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

// update contact by id
const updateContactById = async (req, res, next) => {
  const user = await Contacts.findById(req.params.id);
  if (!user) {
    return next(new HttpError("information is not found!!!"));
  }
  try {
    const update_info = await Contacts.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ statusMessage: "User Updated", data: update_info });
  } catch (err) {
    res
      .status(err.status)
      .json({ statusMessage: "Something went wrong", error: err.message });
  }
};

/// update contact information
const updateContact = async (req, res) => {
  try {
    const { address } = req.body;
    const user = await Contacts.updateOne(
      { name: req.params.name },
      { $set: { address: address } }
    );
    res.status(201).json({ statusMessage: "User Updated", data: user });
  } catch (err) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

/// delete contact information
const deleteContact = async (req, res) => {
  try {
    const user = await Contacts.deleteOne({ name: req.params.name });
    res.status(202).json({ statusMessage: "User Deleted", data: user });
  } catch (err) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

/// Get all contact informations
const getContact = async (req, res) => {
  const user = await Contacts.find();
  try {
    res.status(200).json({
      statusMessage: "Got all contacts",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      errorMessage: err.message,
    });
  }
};

module.exports = {
  createContact,
  getContact,
  getName,
  getPhone,
  updateContact,
  updateContactById,
  deleteContact,
};
