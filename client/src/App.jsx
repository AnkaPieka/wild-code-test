import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Names from "./components/Names";

function App() {
  const [data, setData] = useState([]);

  const getArgonautesData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/argonautes");

      setData(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="App">
      <main>
        <Form getArgonautesData={getArgonautesData} />

        <Names getArgonautesData={getArgonautesData} data={data} />
      </main>
    </div>
  );
}

export default App;
