const express = require("express");
const Model = require("../models/userModel");

const router = express.Router();

router.post("/add", (req, res) => {
  // to extract data from request and save to database
  const data = req.body;
  console.log(data);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved!");
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// model ka use kar rahe hai database k liye

//            GET                                                     POST
//1.data is appended in get request method.       1.in post request data is sent in the form of body.
//2.only textual data can be sent.                2.file can also be sent
//3.data sent is limited.                         3.huge amount of data can be sent.
