const express = require("express");
router = express.Router();
const { getBooks, createBooks } = require("./../controllers/bookController");

router.route("/").get(getBooks).post(createBooks);

module.exports = router;
