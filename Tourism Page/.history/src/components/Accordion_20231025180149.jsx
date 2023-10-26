import { useState } from "react";
import "../styles/accordion.modules.css";
import reveal from "../utils/revealOnScroll";

function Accordion({ itemsSet }) {
  window.addEventListener("scroll", reveal);
  const [selected, setSelected] = useState(0);
  return (
    <div className="accordion revealFromTop">
      {itemsSet.map((i, index) => (
        <div
          key={"accordion " + index}
          onClick={() => setSelected(index)}
          className={`accordion__division revealFromTop ${
            selected === index && "accordion__selected"
          }`}>
          {i}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
