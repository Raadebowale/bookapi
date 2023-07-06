const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const bookRoutes = require("./routes/bookRoutes");
const staffRoutes = require("./routes/staffRoutes");

const dotenv = require("dotenv");
dotenv.config();

// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/api/v1/contacts", contactRoutes);
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/staffs", staffRoutes);

app.use((req, res) => {
  const error = new Error("URL Not Found");
  error.status = 404;
  res.status(error.status).json({ errorMessage: error.message });
});

// global error . also create Class runtime error, unknown error
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.status || 500)
    .json({ message: error.message || "An unknown error occurred" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
