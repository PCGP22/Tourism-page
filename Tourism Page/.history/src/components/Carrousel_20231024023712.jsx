import { useState } from "react";

function Carrousel({ itemsSet }) {
  const navigator = Array(itemsSet.length);
  const [item, setItem] = useState(0);
  function handleNext() {
    if (item < itemsSet.length - 1) {
      setItem((item) => item + 1);
    } else setItem(0);
  }
  function handlePrev() {
    console.log(item);
    if (item >= 1) {
      setItem((item) => item - 1);
    } else setItem(itemsSet.length);
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
