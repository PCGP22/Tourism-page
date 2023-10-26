import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import english from "../data/english.json";
import spanish from "../data/spanish.json";
import explore from "../img/Explore.jpg";
import learn from "../img/learn.webp";
import relax from "../img/Relax.webp";
import family from "../img/Bring your family.jpg";
import tryOut from "../img/Try out new things.jpg";
import enjoy from "../img/enjoy.jpg";

function ComplexCarrousel() {
  const [language] = useContext(languageContext);
  return (
    <>
      <div>
        <img src={explore} alt="explore" />
        <img src={learn} alt="learn" />
        <img src={relax} alt="relax" />
        <img src={family} alt="family" />
        <img src={tryOut} alt="try" />
        <img src={enjoy} alt="enjoy" />
      </div>
    </>
  );
}

export default ComplexCarrousel;
