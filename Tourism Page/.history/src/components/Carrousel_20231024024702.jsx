import { useEffect, useState } from "react";

function Carrousel({ itemsSet, starting = 0 }) {
  useEffect(() => {
    setItem(starting);
  }, [starting]);

  const navigator = new Array(itemsSet.length - 1);
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
        {navigator &&
          navigator.map((i, index) => (
            <span key={index}>{index === item ? "◉" : "◎"}</span>
          ))}
      </div>
      <button onClick={handleNext}>{">"}</button>
    </>
  );
}

export default Carrousel;
