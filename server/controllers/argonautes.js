const Argonaute = require("../models/Argonaute");

exports.createArgonaute = (req, res, next) => {
  const newArgonaute = new Argonaute(req.body);

  newArgonaute
    .save()
    .then(() => res.status(200).json({ message: "Argonaute enregistré !" }))
    .catch((error) => res.status(400).json("Oups...", { error }));
};

exports.getAllArgonautes = (req, res, next) => {
  Argonaute.find()
    .then((argonautes) => {
      res.status(200).json(argonautes);
    })
    .catch((error) => res.status(400).json(error));
};
