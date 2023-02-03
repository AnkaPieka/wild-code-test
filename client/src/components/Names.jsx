import React, { useEffect } from "react";

const Names = ({ getArgonautesData, data }) => {
  useEffect(() => {
    getArgonautesData();
  }, []);

  return (
    <div>
      <h2>Membres de l'équipage</h2>
      <section class="member-list">
        {data.map((element, i) => (
          <div class="member-item" key={i}>
            {element.name}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Names;
