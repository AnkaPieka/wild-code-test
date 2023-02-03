import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newArgonaute = { name: name };

    try {
      await axios.post("http://localhost:3000/api/argonautes", newArgonaute);
      setName("");
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div>
      <h2>Ajouter un(e) Argonaute</h2>
      <form class="new-member-form" onSubmit={(event) => handleSubmit(event)}>
        <label for="name">Nom de l&apos;Argonaute</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tapez le nom ici"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
