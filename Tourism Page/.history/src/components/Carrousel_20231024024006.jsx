import { useState } from "react";

function Carrousel({ itemsSet, starting = 0 }) {
  const navigator = Array(itemsSet.length);
  const [item, setItem] = useState(starting);
  function handleNext() {
    if (item < itemsSet.length - 1) {
      setItem((item) => item + 1);
    } else setItem(0);
  }
  function handlePrev() {
    if (item >= 1) {
      setItem((item) => item - 1);
    } else setItem(itemsSet.length - 1);
  }
  return (
    <>
      <button onClick={handlePrev}>{"<"}</button>
      {itemsSet[item]}
      <div>
        {navigator.map((i, index) => {
          if (index === item) {
            return <li key={index}>◉</li>;
          } else {
            return <li key={index}>◎</li>;
          }
        })}
      </div>
      <button onClick={handleNext}>{">"}</button>
    </>
  );
}

export default Carrousel;
