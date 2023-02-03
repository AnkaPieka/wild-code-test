const mongoose = require("mongoose"); //importation de mongoose sous CommonJS

const argonauteSchema = mongoose.Schema({
  // id: { type: String, required: true, unique: true }, //unique = impossible de créer un autre user avec même mail
  name: { type: String, required: true },
});

// userSchema.plugin(uniqueValidator); //comme argument 'unique' peut donner erreurs illisible côté Mongo, plugin permet d'être sûrs que pas 2x même mail

module.exports = mongoose.model("User", argonauteSchema);
