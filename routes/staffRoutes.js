const express = require("express");
router = express.Router();
const {
  createStaff,
  getAllStaff,
  getStaff,
  updateStaff,
  deleteStaff,
} = require("./../controllers/staffController");

router.route("/").get(getAllStaff).post(createStaff);
router.route("/:id").get(getStaff).patch(updateStaff).delete(deleteStaff);

module.exports = router;
