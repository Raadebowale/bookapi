const express = require("express");
router = express.Router();

const {
  createContact,
  getContact,
  getName,
  getPhone,
  updateContact,
  updateContactById,
  deleteContact,
} = require("./../controllers/contactController");

// Mounting Routes
router.route("/").get(getContact).post(createContact);

// find, update and delete contact by name
router.route("/:name").get(getName).patch(updateContact).delete(deleteContact);

// find contact by phone number
router.route("phone/:phone").get(getPhone);

// update contact by name
router.route("/:id").patch(updateContactById);

module.exports = router;
