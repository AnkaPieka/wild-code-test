const express = require("express");
const mongoose = require("mongoose");

const argonauteRoutes = require("./routes/argonautes");

const app = express();

mongoose
  .connect(
    "mongodb+srv://Anka:Lv5KAZa2IE5VpaQJ@cluster0.xacirmk.mongodb.net/argonautes?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée :", err.message));

app.use(express.json());

app.use("/api", argonauteRoutes);

module.exports = app;
