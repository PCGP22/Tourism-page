import { useState } from "react";

function Accordion({ itemsSet }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="accordion">
      {itemsSet.map((i, index) => (
        <div
          key={"accordion " + index}
          onClick={() => setSelected(index)}
          className={`${selected === index && "accodion__selected"}`}>
          {i}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
