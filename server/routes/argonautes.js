const express = require("express");
const Argonaute = require("../models/Argonaute");
const router = express.Router();

//create one argonaute
router.post("/argonautes", (req, res, next) => {
  const newArgonaute = new Argonaute(req.body);

  newArgonaute
    .save()
    .then(() => res.status(200).json({ message: "Argonaute enregistré !" }))
    .catch((error) => res.status(400).json("Oups...", { error }));
});

//get one argonaute
router.get("/argonautes", (req, res, next) => {
  Argonaute.findOne()
    .then((argonaute) => res.status(200).json(argonaute))
    .catch((error) => res.status(400).json(error));
});

//get list of all
router.get("/", (req, res, next) => {
  Argonaute.find()
    .then((argonautes) => {
      console.log(argonautes);
      res.status(200).json(argonautes);
    })
    .catch((error) => res.status(400).json(error));
});

module.exports = router;
