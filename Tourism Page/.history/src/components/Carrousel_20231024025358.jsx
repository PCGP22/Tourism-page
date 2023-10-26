import { useEffect, useState } from "react";

function Carrousel({ itemsSet, starting = 0 }) {
  useEffect(() => {
    setItem(starting);
  }, [starting]);

  const navigator = [];
  for (let counter = 0; counter < itemsSet; counter++) {
    navigator.push(counter);
  }
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
          console.log(i, index);
          return <span key={index}>{index === item ? "◉" : "◎"}</span>;
        })}
      </div>
      <button onClick={handleNext}>{">"}</button>
    </>
  );
}

export default Carrousel;
