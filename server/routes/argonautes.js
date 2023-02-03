const express = require("express");
const router = express.Router();

const ArgonauteCtrl = require("../controllers/argonautes");

router.post("/argonautes", ArgonauteCtrl.createArgonaute);

router.get("/argonautes", ArgonauteCtrl.getAllArgonautes);

module.exports = router;
