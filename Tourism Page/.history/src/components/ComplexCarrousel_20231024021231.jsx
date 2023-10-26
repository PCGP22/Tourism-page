import { useContext } from "react";
import { languageContext } from "../context/languageContext";
import CarrouselCard from "./CarrouselCard";
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
  const cardsSet = [<CarrouselCard />];
  return (
    <>
      <div>
        <img src={explore} alt="explore" height="100" />
        <img src={learn} alt="learn" height="100" />
        <img src={relax} alt="relax" height="100" />
        <img src={family} alt="family" height="100" />
        <img src={tryOut} alt="try" height="100" />
        <img src={enjoy} alt="enjoy" height="100" />
      </div>
    </>
  );
}

export default ComplexCarrousel;
