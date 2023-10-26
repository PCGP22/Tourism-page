import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Carrousel({ itemsSet, starting = 0 }) {
  useEffect(() => {
    setItem(starting);
  }, [starting]);

  const navigator = [];
  for (let counter = 0; counter < itemsSet.length; counter++) {
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
    <div className="carrousel">
      <button onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      {itemsSet[item]}
      <div className="carrousel__nav">
        {navigator.map((i) => {
          return (
            <span key={i} onClick={() => setItem(i)}>
              {i === item ? "◉" : "◎"}
            </span>
          );
        })}
      </div>
      <button onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Carrousel;
