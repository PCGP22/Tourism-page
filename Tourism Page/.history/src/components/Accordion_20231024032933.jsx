import React, { useState } from "react";

function Accordion({ itemsSet }) {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      {itemsSet.map((i, index) => (
        <div key={"accordion " + index}>{i}</div>
      ))}
    </div>
  );
}

export default Accordion;
