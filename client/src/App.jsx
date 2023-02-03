import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);

  const getArgonautesData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/argonautes");

      setData(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    getArgonautesData();
  }, []);

  return (
    <div className="App">
      <main>
        <Form />

        <h2>Membres de l'équipage</h2>
        <section class="member-list">
          {data.map((element, i) => (
            <div class="member-item" key={i}>
              {element.name}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
