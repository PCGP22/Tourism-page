import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";

function ComplexCarrousel() {
  const [language] = useContext(languageContext);
  return (
    <>
      <div>
        <img src={english.carrousel.explore.image} alt="explore" />
        <img src={english.carrousel.learn.image} alt="learn" />
        <img src={english.carrousel.relax.image} alt="relax" />
        <img src={english.carrousel.family.image} alt="family" />
        <img src={english.carrousel.try.image} alt="try" />
        <img src={english.carrousel.enjoy.image} alt="enjoy" />
      </div>
    </>
  );
}

export default ComplexCarrousel;
