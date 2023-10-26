import { useEffect, useState } from "react";

function Carrousel({ itemsSet, starting = 0 }) {
  useEffect(() => {
    setItem(starting);
  }, [starting]);

  const navigator = new Array(itemsSet.length);
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
        {navigator.map((i, index) => (
          <li key={index}>{index === item ? "◉" : "◎"}</li>
        ))}
      </div>
      <button onClick={handleNext}>{">"}</button>
    </>
  );
}

export default Carrousel;
